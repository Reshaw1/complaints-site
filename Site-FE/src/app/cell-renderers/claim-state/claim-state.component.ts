import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from "@ag-grid-community/angular";
import {
  IAfterGuiAttachedParams,
  ICellRendererParams,
} from "@ag-grid-community/all-modules";
import { ClaimService } from 'src/app/claims/claim.service';
import { Claim_State } from 'src/app/models/Claim_State';

@Component({
  selector: 'app-claim-state',
  templateUrl: './claim-state.component.html',
  styleUrls: ['./claim-state.component.scss']
})
export class ClaimStateComponent implements AgRendererComponent {
  public cellRendererParams: ICellRendererParams;
  claimStates: Claim_State[] = [];
  claimState: Claim_State;

  constructor(private claimService: ClaimService) {}

  refresh(params: ICellRendererParams): boolean {
    console.log("refresh");
    return true;
  }

  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error("Method not implemented.");
  }

  agInit(params: ICellRendererParams): void {
    this.cellRendererParams = params;
    this.claimState = new Claim_State();
    this.claimService.getClaimState().subscribe((res: any) => {
      for(let i of res) {
        this.claimState.ID = i[0],
        this.claimState.state = i[1],
        this.claimStates.push(this.claimState);
        this.claimState = new Claim_State();
      }
      this.claimState.ID = params.value;
    });
  }

  onSelectionChanged($event) {
    this.cellRendererParams.setValue(this.claimState.ID);
  }
}
