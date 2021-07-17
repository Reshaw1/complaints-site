import { Component, OnInit } from '@angular/core';
import { Claim_State } from 'src/app/models/Claim_State';
import { ClaimStateService } from '../claim-state.service';

@Component({
  selector: 'app-insert-m-claim-state',
  templateUrl: './insert-m-claim-state.component.html',
  styleUrls: ['./insert-m-claim-state.component.scss']
})
export class InsertMClaimStateComponent implements OnInit {

  claimState: Claim_State;


  constructor(private claimStateService: ClaimStateService) { }

  ngOnInit(): void {
    this.claimState = new Claim_State;
  }

  onCreateClaimState() {
    console.log(JSON.parse(JSON.stringify(this.claimState)));
    this.claimStateService.createClaimState(this.claimState).subscribe(res => {
      window.alert("Se ha insertado Correctamente")
    })
  }
}
