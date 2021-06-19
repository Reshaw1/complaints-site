import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from "@ag-grid-community/angular";
import {
  IAfterGuiAttachedParams,
  ICellRendererParams,
} from "@ag-grid-community/all-modules";
import { Person } from 'src/app/models/Person';
import { ComplainService } from 'src/app/complains/complain.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements AgRendererComponent {

  public cellRendererParams: ICellRendererParams;
  persons: Person[] = [];
  person: Person;

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
    this.person = new Person();
    this.complainService.getPersons().subscribe((res: any) => {
      for(let i of res) {
        this.person.ID = i[0],
        this.person.name = i[1],
        this.person.birthDay = i[2],
        this.person.idCard = i[3],
        this.person.phone = i[4],
        this.person.gender = i[5],
        this.persons.push(this.person);
        this.person = new Person();
      }
      this.person.ID = params.value;
    });
  }

  onSelectionChanged($event) {
    this.cellRendererParams.setValue(this.person.ID);
  }
}
