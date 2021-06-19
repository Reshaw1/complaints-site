import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from "@ag-grid-community/angular";
import {
  IAfterGuiAttachedParams,
  ICellRendererParams,
} from "@ag-grid-community/all-modules";
import { ComplainService } from 'src/app/complains/complain.service';
import { Department } from 'src/app/models/Department';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements AgRendererComponent {
  public cellRendererParams: ICellRendererParams;

  date: Date;

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
      this.date = new Date(params.value);
  }

  onSelectionChanged($event) {
    this.cellRendererParams.setValue(this.date);
  }
}
