import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complain } from 'src/app/models/Complain';
import { Complain_State } from 'src/app/models/Complain_State';
import { Complain_Type } from 'src/app/models/Complain_Type';
import { Department } from 'src/app/models/Department';
import { Person } from 'src/app/models/Person';
import { ComplainService } from '../complain.service';

@Component({
  selector: 'app-insert-complain',
  templateUrl: './insert-complain.component.html',
  styleUrls: ['./insert-complain.component.scss']
})
export class InsertComplainComponent implements OnInit {

  Departments: Department[] = [];
  Department: Department;

  ComplainStates: Complain_State[] = [];
  ComplainState: Complain_State;

  ComplainTypes: Complain_Type[] = [];
  ComplainType: Complain_Type;

  Complain: Complain


  constructor(private complainService: ComplainService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Department = new Department;
    this.ComplainState = new Complain_State;
    this.ComplainType = new Complain_Type;
    this.Complain = new Complain;
    this.Complain.department = new Department;
    this.Complain.person = new Person;
    this.Complain.state = new Complain_State;
    this.Complain.type = new Complain_Type;
    this.complainService.getDepartement().subscribe((res: any) => {
      for(let i of res) {
        this.Department.ID = i[0],
        this.Department.name = i[1],
        this.Departments.push(this.Department);
        this.Department = new Department();
    }
  })

  this.complainService.getComplainType().subscribe((res: any) => {
    for(let i of res) {
      this.ComplainType.ID = i[0],
      this.ComplainType.name = i[1],
      this.ComplainTypes.push(this.ComplainType);
      this.ComplainType = new Complain_Type();
    }
  })

  this.complainService.getComplainState().subscribe((res: any) => {
    for(let i of res) {
      this.ComplainState.ID = i[0],
      this.ComplainState.name = i[1],
      this.ComplainStates.push(this.ComplainState);
      this.ComplainState = new Complain_State();
    }
  })
  }

  onCreateComplain() {
    this.Complain.date = new Date;
    this.Complain.department.ID = parseInt(this.Department.ID.toString());
    this.Complain.person.ID = parseInt(this.route.snapshot.queryParamMap.get("personId"));
    this.Complain.state.ID = 1;
    this.Complain.type.ID = parseInt(this.ComplainType.ID.toString());
    console.log(JSON.parse(JSON.stringify(this.Complain)));
    this.complainService.createComplain(this.Complain).subscribe(res => {
      window.alert("Se ha insertado Correctamente")
    })
  }

}
