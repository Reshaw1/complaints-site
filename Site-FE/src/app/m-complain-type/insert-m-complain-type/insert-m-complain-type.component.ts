import { Component, OnInit } from '@angular/core';
import { Complain_Type } from 'src/app/models/Complain_Type';
import { ComplainTypeService } from '../complain-type.service';

@Component({
  selector: 'app-insert-m-complain-type',
  templateUrl: './insert-m-complain-type.component.html',
  styleUrls: ['./insert-m-complain-type.component.scss']
})
export class InsertMComplainTypeComponent implements OnInit {
  complainType: Complain_Type;


  constructor(private complainTypeService: ComplainTypeService) { }

  ngOnInit(): void {
    this.complainType = new Complain_Type;
  }

  onCreateComplainType() {
    console.log(JSON.parse(JSON.stringify(this.complainType)));
    this.complainTypeService.createComplainType(this.complainType).subscribe(res => {
      window.alert("Se ha insertado Correctamente")
    })
  }
}
