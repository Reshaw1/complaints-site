import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridOptions } from 'ag-grid-community';
import { Department } from 'src/app/models/Department';
import { DataGridFunctions } from 'src/app/utilities/DataGridFunctions';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.scss']
})
export class ViewDepartmentComponent implements OnInit {
  selection: boolean = false;
  gridEdited: boolean = false;
  value = '';
  // columnApi: any;
  gridOptions: GridOptions;

  departments: Department[] = [];
  department: Department;

  personId: number

  columnDefs = [
    { field: 'name', headerName: 'Nombre del Departamento', colId: "0", width: 400, editable: true, filter: "agTextColumnFilter", filterParams: DataGridFunctions.CodeFilterParams},
    {
      field: "Gestionar",
      headerName: "",
      width: 200,
      colId: "1",
      checkboxSelection: true,
      editable: false,
      cellClass: "ag-check-cell",
    },
    { field: "Modified", colId: "2", hide: true },
    { field: "ID", colId: "3", hide: true },

  ];

  defaultColDef = {
    resizable: true,
    editable: false,
    singleClickEdit: true, enableCellChangeFlash: true, suppressMovable: true,
  }

  rowData: any = [];

  constructor(
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.personId = parseInt(this.route.snapshot.queryParamMap.get("personId"))
    this.department = new Department;

    this.departmentService.getDepartment().subscribe((res: any) => {
      console.log(res);
      for(let i of res) {

        this.department.ID = parseInt(i[0]);
        this.department.name = i[1];
        this.departments.push(this.department)
        this.department = new Department();
      }
      this.rowData = this.departments;
    });
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
    if (this.gridOptions.api.getValue("2", node) != "New") {
      node.setDataValue("2", "true");
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
      this.departmentService.deleteDepartment(selectedRows[0].ID).subscribe(res => {
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
      if (this.gridOptions.api.getValue("2", row) == "true") {
        modifiedRows.push(i);
      }
    }
    var row2;
    for (let x of modifiedRows) {
      this.department = new Department();
      row2 = this.gridOptions.api.getDisplayedRowAtIndex(x);
      this.department.name = this.gridOptions.api.getValue("0", row2);
      this.department.ID = this.gridOptions.api.getValue("3", row2);
      console.log(JSON.parse(JSON.stringify(this.department)))
      this.departmentService.updateDepartment(this.department).subscribe(res => {
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
