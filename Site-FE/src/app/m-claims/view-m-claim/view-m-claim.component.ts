import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridOptions } from 'ag-grid-community';
import { ClaimStateComponent } from 'src/app/cell-renderers/claim-state/claim-state.component';
import { ClaimTypeComponent } from 'src/app/cell-renderers/claim-type/claim-type.component';
import { DateComponent } from 'src/app/cell-renderers/date/date.component';
import { DepartmentComponent } from 'src/app/cell-renderers/department/department.component';
import { PersonComponent } from 'src/app/cell-renderers/person/person.component';
import { ComplainService } from 'src/app/complains/complain.service';
import { Claim } from 'src/app/models/Claim';
import { Claim_State } from 'src/app/models/Claim_State';
import { Claim_Type } from 'src/app/models/Claim_Type';
import { Department } from 'src/app/models/Department';
import { Person } from 'src/app/models/Person';
import { CResponse } from 'src/app/models/Response';
import { ResponseService } from 'src/app/response/response.service';
import { DataGridFunctions } from 'src/app/utilities/DataGridFunctions';
import { ClaimService } from '../../claims/claim.service';

@Component({
  selector: 'app-view-m-claim',
  templateUrl: './view-m-claim.component.html',
  styleUrls: ['./view-m-claim.component.scss']
})
export class ViewMClaimComponent implements OnInit {
  selection: boolean = false;
  gridEdited: boolean = false;
  value = '';

  showAnswer: boolean = false;
  // columnApi: any;
  gridOptions: GridOptions;

  claims: Claim[] = [];
  claim: Claim;

  responses: CResponse[];
  response: CResponse;

  personId: number

  columnDefs = [
    { field: 'description', headerName: 'Descripcion', colId: "0", width: 400, filter: "agTextColumnFilter", filterParams: DataGridFunctions.CodeFilterParams, editable: true},
    { field: 'person.ID', headerName: 'Person', colId: "1", width: 250, hide: true, editable: false, cellRenderer: 'personCellRenderer'},
    { field: 'date', headerName: 'Fecha', colId: "2", width: 300, filter: "agDateColumnFilter", cellRenderer: "dateCellRenderer" },
    { field: 'department.ID', headerName: 'Departamento', colId: "3", width: 300, cellRenderer: 'departmentCellRenderer'},
    { field: 'type.ID', headerName: 'Tipo', colId: "4", width: 225, cellRenderer: 'claimTypeCellRenderer'},
    { field: "state.ID", headerName: 'Estado', width: 300, colId: "8", cellRenderer: 'claimStateCellRenderer'},
    {
      field: "Gestionar",
      headerName: "",
      width: 200,
      colId: "5",
      checkboxSelection: true,
      editable: false,
      cellClass: "ag-check-cell",
    },
    { field: "Modified", colId: "6", hide: true },
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
    private responseService: ResponseService,
  ) { }

  ngOnInit(): void {
    this.personId = parseInt(this.route.snapshot.queryParamMap.get("personId"))
    this.claim = new Claim();
    this.claim.department = new Department;
    this.claim.person = new Person;
    this.claim.state = new Claim_State;
    this.claim.type = new Claim_Type;

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
        this.claims.push(this.claim);
        this.claim = new Claim();
        this.claim.department = new Department;
        this.claim.person = new Person;
        this.claim.state = new Claim_State;
        this.claim.type = new Claim_Type;
      }
      this.rowData = this.claims;
    });
    this.frameworkComponents = {
      personCellRenderer: PersonComponent,
      departmentCellRenderer: DepartmentComponent,
      claimTypeCellRenderer: ClaimTypeComponent,
      claimStateCellRenderer: ClaimStateComponent,
      dateCellRenderer: DateComponent
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
  }

  onCellValueChanged(params) {
    this.gridEdited = true;
    var node;
    node = params.node;
    if (this.gridOptions.api.getValue("6", node) != "New") {
      node.setDataValue("6", "true");
    }
  }

  onSelectionChanged(event) {
    if (this.gridOptions.api.getSelectedRows().length == 1) {
      this.selection = true;
    } else {
      this.selection = false;
    }
  }

  onAddRow() {
    // const newRows = [
    //   {
    //     job_Name: "",
    //     job_Risk_Level: "",
    //     job_Min_Salary: "0",
    //     job_Max_Salary: "0",
    //     job_State: "Vacante",
    //     Modified: "New",
    //     job_Department: { department_Name: "",
    //                       department_Id: ""
    //                     },
    //     job_Id: "",
    //   },
    // ];
    // this.gridOptions.api.applyTransaction({ add: newRows });
  }

  onDeleteRow() {
    var selectedRows = this.gridOptions.api.getSelectedRows();
    var selectedNodes = this.gridOptions.api.getSelectedNodes();
    for(let row of selectedRows) {
      this.claimService.deleteClaim(selectedRows[0].ID).subscribe(res => {
        this.gridOptions.api.applyTransaction({ remove: selectedRows });
      }, err => {
        window.alert("Hubo un error al borrar el registro")
      });
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
      this.claim = new Claim();
      this.claim.department = new Department;
      this.claim.person = new Person;
      this.claim.state = new Claim_State;
      this.claim.type = new Claim_Type;
      row2 = this.gridOptions.api.getDisplayedRowAtIndex(x);
      this.claim.description = this.gridOptions.api.getValue("0", row2);
      this.claim.person.ID = parseInt(this.gridOptions.api.getValue("1", row2));
      this.claim.date = new Date(this.gridOptions.api.getValue("2", row2));
      this.claim.department.ID = parseInt(this.gridOptions.api.getValue("3", row2));
      this.claim.type.ID = parseInt(this.gridOptions.api.getValue("4", row2));
      this.claim.state.ID = parseInt(this.gridOptions.api.getValue("8", row2));
      this.claim.ID = parseInt(this.gridOptions.api.getValue("7", row2))
      console.log(JSON.parse(JSON.stringify(this.claim)))
      this.claimService.updateClaim(this.claim).subscribe(res => {
        window.alert("Se ha actualizado correctamente")
    })
    }

    // var row3;
    //   var newRows: Array<number> = [];
    //   for (let j = 0; j < this.gridOptions.api.getDisplayedRowCount(); j++) {
    //     row3 = this.gridOptions.api.getDisplayedRowAtIndex(j);
    //     if (this.gridOptions.api.getValue("6", row3) == "New") {
    //       newRows.push(j);
    //     }
    //   }
    //   var row4;
    //   for (let y of newRows) {
    //     this.job = new JobModel();
    //     row4 = this.gridOptions.api.getDisplayedRowAtIndex(y);
    //     this.job.job_Name = this.gridOptions.api.getValue("0", row4);
    //     this.job.job_Risk_Level = this.gridOptions.api.getValue("1", row4);
    //     this.job.job_Min_Salary = this.gridOptions.api.getValue("2", row4)
    //     .trim()
    //     .replace(" ", "")
    //     .replace(",", "")
    //     .replace(",", "")
    //     .replace("DOP", "")
    //     .trim();
    //     this.job.job_Max_Salary = this.gridOptions.api.getValue("3", row4)
    //     .trim()
    //     .replace(" ", "")
    //     .replace(",", "")
    //     .replace(",", "")
    //     .replace("DOP", "")
    //     .trim();
    //     this.job.job_State = this.gridOptions.api.getValue("4", row4);
    //     this.departmentService.getDepartmentById(this.gridOptions.api.getValue("9", row4)).subscribe(res => {
    //       this.job.job_Department = res;
    //       this.jobService.createJob(this.job).subscribe(res => {
    //         window.alert("Se ha insertado correctamente")
    //         //this.gridOptions.api.forEachNode(node => node.setDataValue("6", ""))
    //       }, err => {
    //         window.alert("Ha ocurrido un fallo en la insercion")
    //       })
    //   })
    // }
  }

  onDisplayAnswer() {
    console.log("display answer")
    this.showAnswer =  true
    this.response = new CResponse;
    this.response.claim = new Claim;
    this.response.date = new Date;
    this.response.person = new Person;
    this.response.rating = 5;
    var selectedRows = this.gridOptions.api.getSelectedRows();
    this.response.person.ID = this.personId;
    this.response.claim.ID = parseInt(selectedRows[0].ID);
  }

  onCreateResponse() {
    console.log(this.response);
    this.responseService.createResponse(this.response).subscribe(res => {
      this.showAnswer = false;
    })
  }
}
