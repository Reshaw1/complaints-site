import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Claim } from 'src/app/models/Claim';
import { Claim_State } from 'src/app/models/Claim_State';
import { Claim_Type } from 'src/app/models/Claim_Type';
import { Department } from 'src/app/models/Department';
import { Person } from 'src/app/models/Person';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-insert-claim',
  templateUrl: './insert-claim.component.html',
  styleUrls: ['./insert-claim.component.scss']
})
export class InsertClaimComponent implements OnInit {
  Departments: Department[] = [];
  Department: Department;

  ClaimStates: Claim_State[] = [];
  ClaimState: Claim_State;

  ClaimTypes: Claim_Type[] = [];
  ClaimType: Claim_Type;

  Claim: Claim


  constructor(private ClaimService: ClaimService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Department = new Department;
    this.ClaimState = new Claim_State;
    this.ClaimType = new Claim_Type;
    this.Claim = new Claim;
    this.Claim.department = new Department;
    this.Claim.person = new Person;
    this.Claim.state = new Claim_State;
    this.Claim.type = new Claim_Type;
    this.ClaimService.getDepartement().subscribe((res: any) => {
      for(let i of res) {
        this.Department.ID = i[0],
        this.Department.name = i[1],
        this.Departments.push(this.Department);
        this.Department = new Department();
    }
  })

  this.ClaimService.getClaimType().subscribe((res: any) => {
    for(let i of res) {
      this.ClaimType.ID = i[0],
      this.ClaimType.name = i[1],
      this.ClaimTypes.push(this.ClaimType);
      this.ClaimType = new Claim_Type();
    }
  })

  this.ClaimService.getClaimState().subscribe((res: any) => {
    for(let i of res) {
      this.ClaimState.ID = i[0],
      this.ClaimState.name = i[1],
      this.ClaimStates.push(this.ClaimState);
      this.ClaimState = new Claim_State();
    }
  })
  }

  onCreateClaim() {
    this.Claim.date = new Date;
    this.Claim.department.ID = parseInt(this.Department.ID.toString());
    this.Claim.person.ID = parseInt(this.route.snapshot.queryParamMap.get("personId"));
    this.Claim.state.ID = 1;
    this.Claim.type.ID = parseInt(this.ClaimType.ID.toString());
    console.log(JSON.parse(JSON.stringify(this.Claim)));
    this.ClaimService.createClaim(this.Claim).subscribe(res => {
      window.alert("Se ha insertado Correctamente")
    })
  }
}
