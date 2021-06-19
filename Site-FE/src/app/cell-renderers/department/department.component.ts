import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from "@ag-grid-community/angular";
import {
  IAfterGuiAttachedParams,
  ICellRendererParams,
} from "@ag-grid-community/all-modules";
import { ComplainService } from 'src/app/complains/complain.service';
import { Department } from 'src/app/models/Department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements AgRendererComponent {
  public cellRendererParams: ICellRendererParams;
  departments: Department[] = [];
  department: Department;

  constructor(private complainService: ComplainService) {}

  refresh(params: ICellRendererParams): boolean {
    console.log("refresh");
    return true;
  }

  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error("Method not implemented.");
  }

  agInit(params: ICellRendererParams): void {
    this.cellRendererParams = params;
    this.department = new Department();
    this.complainService.getDepartement().subscribe((res: any) => {
      for(let i of res) {
        this.department.ID = i[0],
        this.department.name = i[1],
        this.departments.push(this.department);
        this.department = new Department();
      }
      this.department.ID = params.value;
    });
  }

  onSelectionChanged($event) {
    this.cellRendererParams.setValue(this.department.ID);
  }
}
