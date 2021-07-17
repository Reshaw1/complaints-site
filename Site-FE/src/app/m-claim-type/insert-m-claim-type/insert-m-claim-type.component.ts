import { Component, OnInit } from '@angular/core';
import { Claim_Type } from 'src/app/models/Claim_Type';
import { ClaimTypeService } from '../claim-type.service';

@Component({
  selector: 'app-insert-m-claim-type',
  templateUrl: './insert-m-claim-type.component.html',
  styleUrls: ['./insert-m-claim-type.component.scss']
})
export class InsertMClaimTypeComponent implements OnInit {
  claimType: Claim_Type;


  constructor(private claimTypeService: ClaimTypeService) { }

  ngOnInit(): void {
    this.claimType = new Claim_Type;
  }

  onCreateClaimType() {
    console.log(JSON.parse(JSON.stringify(this.claimType)));
    this.claimTypeService.createClaimType(this.claimType).subscribe(res => {
      window.alert("Se ha insertado Correctamente")
    })
  }
}
