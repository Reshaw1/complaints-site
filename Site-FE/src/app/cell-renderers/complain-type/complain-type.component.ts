import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from "@ag-grid-community/angular";
import {
  IAfterGuiAttachedParams,
  ICellRendererParams,
} from "@ag-grid-community/all-modules";
import { ComplainService } from 'src/app/complains/complain.service';
import { Complain_Type } from 'src/app/models/Complain_Type';

@Component({
  selector: 'app-complain-type',
  templateUrl: './complain-type.component.html',
  styleUrls: ['./complain-type.component.scss']
})
export class ComplainTypeComponent implements AgRendererComponent {
  public cellRendererParams: ICellRendererParams;
  complainTypes: Complain_Type[] = [];
  complainType: Complain_Type;

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
    this.complainType = new Complain_Type();
    this.complainService.getComplainType().subscribe((res: any) => {
      for(let i of res) {
        this.complainType.ID = i[0],
        this.complainType.name = i[1],
        this.complainTypes.push(this.complainType);
        this.complainType = new Complain_Type();
      }
      this.complainType.ID = params.value;
    });
  }

  onSelectionChanged($event) {
    this.cellRendererParams.setValue(this.complainType.ID);
  }
}
