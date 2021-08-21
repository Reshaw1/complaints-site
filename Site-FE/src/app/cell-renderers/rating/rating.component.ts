import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from "@ag-grid-community/angular";
import {
  IAfterGuiAttachedParams,
  ICellRendererParams,
} from "@ag-grid-community/all-modules";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements AgRendererComponent {

  public cellRendererParams: ICellRendererParams;

  rating: string;

  ratings: string[] = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ]

  constructor() {}

  refresh(params: ICellRendererParams): boolean {
    console.log("refresh");
    return true;
  }

  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error("Method not implemented.");
  }

  agInit(params: ICellRendererParams): void {
    this.cellRendererParams = params;
    this.rating = params.value;
  }

  onSelectionChanged($event) {
    this.cellRendererParams.setValue(parseInt(this.rating));
  }

}
