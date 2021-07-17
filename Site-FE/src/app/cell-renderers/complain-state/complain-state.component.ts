import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from "@ag-grid-community/angular";
import {
  IAfterGuiAttachedParams,
  ICellRendererParams,
} from "@ag-grid-community/all-modules";
import { ComplainService } from 'src/app/complains/complain.service';
import { Complain_State } from 'src/app/models/Complain_State';

@Component({
  selector: 'app-complain-state',
  templateUrl: './complain-state.component.html',
  styleUrls: ['./complain-state.component.scss']
})
export class ComplainStateComponent implements AgRendererComponent {
  public cellRendererParams: ICellRendererParams;
  complainStates: Complain_State[] = [];
  complainState: Complain_State;

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
    this.complainState = new Complain_State();
    this.complainService.getComplainState().subscribe((res: any) => {
      for(let i of res) {
        this.complainState.ID = i[0],
        this.complainState.state = i[1],
        this.complainStates.push(this.complainState);
        this.complainState = new Complain_State();
      }
      this.complainState.ID = params.value;
    });
  }

  onSelectionChanged($event) {
    this.cellRendererParams.setValue(this.complainState.ID);
  }
}
