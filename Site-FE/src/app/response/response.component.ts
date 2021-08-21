import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridOptions } from 'ag-grid-community';
import { DateComponent } from '../cell-renderers/date/date.component';
import { PersonComponent } from '../cell-renderers/person/person.component';
import { RatingComponent } from '../cell-renderers/rating/rating.component';
import { ClaimService } from '../claims/claim.service';
import { ComplainService } from '../complains/complain.service';
import { Claim } from '../models/Claim';
import { Claim_State } from '../models/Claim_State';
import { Claim_Type } from '../models/Claim_Type';
import { Department } from '../models/Department';
import { Person } from '../models/Person';
import { CResponse } from '../models/Response';
import { DataGridFunctions } from '../utilities/DataGridFunctions';
import { ResponseService } from './response.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {
  selection: boolean = false;
  gridEdited: boolean = false;
  value = '';
  // columnApi: any;
  gridOptions: GridOptions;

  claims: Claim[] = [];
  claim: Claim;

  responses: CResponse[] = [];
  response: CResponse;

  innerJoinResponses: CResponse[] = [];

  personId: number;

  columnDefs = [
    { field: 'content', headerName: 'Respuesta', colId: "0", width: 500, filter: "agTextColumnFilter", filterParams: DataGridFunctions.CodeFilterParams, editable: true},
    { field: 'person.ID', headerName: 'Empleado', colId: "1", width: 250, editable: false, cellRenderer: 'personCellRenderer'},
    { field: 'date', headerName: 'Fecha', colId: "2", width: 300, filter: "agDateColumnFilter", cellRenderer: "dateCellRenderer" },
    { field: 'rating', headerName: 'Rating', colId: "3", width: 250, cellRenderer: 'ratingCellRenderer'},
    { field: 'claim.ID', headerName: 'Tipo', colId: "4", width: 300, hide: true},
    { field: "person.ID", headerName: 'Estado', width: 225, colId: "5", hide: true},
    { field: "Modified", colId: "6", hide: true },
    // {
    //   field: "Gestionar",
    //   headerName: "",
    //   width: 100,
    //   colId: "5",
    //   checkboxSelection: true,
    //   editable: false,
    //   cellClass: "ag-check-cell",
    // },
    // { field: "Modified", colId: "6", hide: true },
    { field: "ID", colId: "7", hide: true },

  ];

  defaultColDef = {
    resizable: true,
    editable: false,
    singleClickEdit: true, enableCellChangeFlash: true, suppressMovable: true,
  }

  rowData: any = [];
  frameworkComponents

  constructor(
    private complainService: ComplainService,
    private router: Router,
    private route: ActivatedRoute,
    private claimService: ClaimService,
    private responseService: ResponseService
  ) { }

  ngOnInit(): void {
    this.personId = parseInt(this.route.snapshot.queryParamMap.get("personId"))
    this.claim = new Claim();
    this.claim.department = new Department;
    this.claim.person = new Person;
    this.claim.state = new Claim_State;
    this.claim.type = new Claim_Type;

    this.response = new CResponse;
    this.response.person = new Person;
    this.response.claim = new Claim;

    this.claimService.getClaims().subscribe((res: any) => {
      console.log(res);
      for(let i of res) {

        this.claim.ID = i[0];
        this.claim.date = i[1];
        this.claim.description = i[2];
        this.claim.person.ID = i[3];
        this.claim.department.ID = i[4];
        this.claim.state.ID = i[5];
        this.claim.type.ID = i[6];
        if(this.claim.person.ID == this.personId) {
          this.claims.push(this.claim);
        }
        this.claim = new Claim();
        this.claim.department = new Department;
        this.claim.person = new Person;
        this.claim.state = new Claim_State;
        this.claim.type = new Claim_Type;
      }
    });

    this.responseService.getResponse().subscribe((res: any) => {
      console.log(res);
      for(let r of res) {
        this.response.ID = r[0];
        this.response.content = r[1];
        this.response.date = r[2];
        this.response.claim.ID = r[3];
        this.response.person.ID = r[4];
        this.response.rating = r[5];
        this.responses.push(this.response);
        this.response = new CResponse;
        this.response.claim = new Claim;
        this.response.person = new Person;
      }

      for(let re of this.responses) {
        for(let cl of this.claims) {
          if(re.claim.ID == cl.ID) {
            this.innerJoinResponses.push(re);
          }
        }
      }
      this.rowData = this.innerJoinResponses;
    })

    this.frameworkComponents = {
      personCellRenderer: PersonComponent,
      dateCellRenderer: DateComponent,
      ratingCellRenderer: RatingComponent
    };
  }

  ngAfterContentInit() {
    this.gridOptions = {
      onGridReady: function (params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        console.log("The grid is ready!");
        this.api.sizeColumnsToFit();
      },
      onGridSizeChanged: function (params) {
        this.api.sizeColumnsToFit();
      },
      onComponentStateChanged: function (params) {
        this.api.sizeColumnsToFit();
      },
    };
    // this.gridOptions.onCellValueChanged = this.onCellValueChanged;
  };

  onCellValueChanged(params) {
    this.gridEdited = true;
    var node;
    node = params.node;
    if (this.gridOptions.api.getValue("6", node) != "New") {
      node.setDataValue("6", "true");
    }
  }

  onSaveChanges() {
    var row;
    var modifiedRows: Array<number> = [];
    for (let i = 0; i < this.gridOptions.api.getDisplayedRowCount(); i++) {
      row = this.gridOptions.api.getDisplayedRowAtIndex(i);
      if (this.gridOptions.api.getValue("6", row) == "true") {
        modifiedRows.push(i);
      }
    }
    var row2;
    for (let x of modifiedRows) {
      this.response = new CResponse();
      this.response.person = new Person;
      this.response.claim = new Claim;
      row2 = this.gridOptions.api.getDisplayedRowAtIndex(x);
      this.response.ID = parseInt(this.gridOptions.api.getValue("7", row2));
      this.response.content = this.gridOptions.api.getValue("0", row2);
      this.response.date = new Date(this.gridOptions.api.getValue("2", row2));
      this.response.claim.ID = parseInt(this.gridOptions.api.getValue("4", row2));
      this.response.person.ID = parseInt(this.gridOptions.api.getValue("5", row2));
      this.response.rating = parseInt(this.gridOptions.api.getValue("3", row2));
      console.log(JSON.parse(JSON.stringify(this.response)))
      this.responseService.updateResponse(this.response).subscribe(res => {
        window.alert("Se ha actualizado correctamente")
      })
    }
  }
}
