import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/Department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-insert-department',
  templateUrl: './insert-department.component.html',
  styleUrls: ['./insert-department.component.scss']
})
export class InsertDepartmentComponent implements OnInit {
  department: Department;


  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.department = new Department;
  }

  onCreateDepartment() {
    console.log(JSON.parse(JSON.stringify(this.department)));
    this.departmentService.createDepartment(this.department).subscribe(res => {
      window.alert("Se ha insertado Correctamente")
    })
  }
}
