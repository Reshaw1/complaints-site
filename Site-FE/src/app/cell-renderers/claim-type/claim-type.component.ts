import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from "@ag-grid-community/angular";
import {
  IAfterGuiAttachedParams,
  ICellRendererParams,
} from "@ag-grid-community/all-modules";
import { ComplainService } from 'src/app/complains/complain.service';
import { ClaimService } from 'src/app/claims/claim.service';
import { Claim_Type } from 'src/app/models/Claim_Type';

@Component({
  selector: 'app-claim-type',
  templateUrl: './claim-type.component.html',
  styleUrls: ['./claim-type.component.scss']
})
export class ClaimTypeComponent implements AgRendererComponent {
  public cellRendererParams: ICellRendererParams;
  claimTypes: Claim_Type[] = [];
  claimType: Claim_Type;

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
    this.claimType = new Claim_Type();
    this.claimService.getClaimType().subscribe((res: any) => {
      for(let i of res) {
        this.claimType.ID = i[0],
        this.claimType.type = i[1],
        this.claimTypes.push(this.claimType);
        this.claimType = new Claim_Type();
      }
      this.claimType.ID = params.value;
    });
  }

  onSelectionChanged($event) {
    this.cellRendererParams.setValue(this.claimType.ID);
  }
}
