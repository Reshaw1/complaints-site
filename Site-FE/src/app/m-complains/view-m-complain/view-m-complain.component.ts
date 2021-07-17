import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridOptions } from 'ag-grid-community';
import { ComplainStateComponent } from 'src/app/cell-renderers/complain-state/complain-state.component';
import { ComplainTypeComponent } from 'src/app/cell-renderers/complain-type/complain-type.component';
import { DateComponent } from 'src/app/cell-renderers/date/date.component';
import { DepartmentComponent } from 'src/app/cell-renderers/department/department.component';
import { PersonComponent } from 'src/app/cell-renderers/person/person.component';
import { Complain } from 'src/app/models/Complain';
import { Complain_State } from 'src/app/models/Complain_State';
import { Complain_Type } from 'src/app/models/Complain_Type';
import { Department } from 'src/app/models/Department';
import { Person } from 'src/app/models/Person';
import { DataGridFunctions } from 'src/app/utilities/DataGridFunctions';
import { ComplainService } from '../../complains/complain.service';

@Component({
  selector: 'app-view-m-complain',
  templateUrl: './view-m-complain.component.html',
  styleUrls: ['./view-m-complain.component.scss']
})
export class ViewMComplainComponent implements OnInit {
  selection: boolean = false;
  gridEdited: boolean = false;
  value = '';
  // columnApi: any;
  gridOptions: GridOptions;

  complains: Complain[] = [];
  complain: Complain;

  personId: number

  columnDefs = [
    { field: 'description', headerName: 'Descripcion', colId: "0", width: 400, filter: "agTextColumnFilter", filterParams: DataGridFunctions.CodeFilterParams, editable: true},
    { field: 'person.ID', headerName: 'Person', colId: "1", width: 250, editable: false, cellRenderer: 'personCellRenderer'},
    { field: 'date', headerName: 'Fecha', colId: "2", width: 300, filter: "agDateColumnFilter", cellRenderer: "dateCellRenderer" },
    { field: 'department.ID', headerName: 'Departamento', colId: "3", width: 300, cellRenderer: 'departmentCellRenderer'},
    { field: 'type.ID', headerName: 'Tipo', colId: "4", width: 300, cellRenderer: 'complainTypeCellRenderer'},
    { field: "state.ID", headerName: 'Estado', width: 225, colId: "8", cellRenderer: 'complainStateCellRenderer', editable: false},
    {
      field: "Gestionar",
      headerName: "",
      width: 100,
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.personId = parseInt(this.route.snapshot.queryParamMap.get("personId"))

    this.complain = new Complain();
    this.complain.department = new Department;
    this.complain.person = new Person;
    this.complain.state = new Complain_State;
    this.complain.type = new Complain_Type;
    this.complainService.getComplain().subscribe((res: any) => {
      console.log(res);
      for(let i of res) {

        this.complain.ID = i[0];
        this.complain.date = i[1];
        this.complain.description = i[2];
        this.complain.person.ID = i[3];
        this.complain.department.ID = i[4];
        this.complain.state.ID = i[5];
        this.complain.type.ID = i[6];
        this.complains.push(this.complain);
        this.complain = new Complain();
        this.complain.department = new Department;
        this.complain.person = new Person;
        this.complain.state = new Complain_State;
        this.complain.type = new Complain_Type;
      }
      this.rowData = this.complains;
    });
    this.frameworkComponents = {
      personCellRenderer: PersonComponent,
      departmentCellRenderer: DepartmentComponent,
      complainTypeCellRenderer: ComplainTypeComponent,
      complainStateCellRenderer: ComplainStateComponent,
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
      this.complainService.deleteComplain(selectedRows[0].ID).subscribe(res => {
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
      this.complain = new Complain();
      this.complain.department = new Department;
      this.complain.person = new Person;
      this.complain.state = new Complain_State;
      this.complain.type = new Complain_Type;
      row2 = this.gridOptions.api.getDisplayedRowAtIndex(x);
      this.complain.description = this.gridOptions.api.getValue("0", row2);
      this.complain.person.ID = this.personId;
      //parseInt(this.gridOptions.api.getValue("1", row2));
      this.complain.date = new Date(this.gridOptions.api.getValue("2", row2));
      this.complain.department.ID = parseInt(this.gridOptions.api.getValue("3", row2));
      this.complain.type.ID = parseInt(this.gridOptions.api.getValue("4", row2));
      this.complain.state.ID = parseInt(this.gridOptions.api.getValue("8", row2));
      this.complain.ID = parseInt(this.gridOptions.api.getValue("7", row2))
      console.log(JSON.parse(JSON.stringify(this.complain)))
      this.complainService.updateComplain(this.complain).subscribe(res => {
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
}
