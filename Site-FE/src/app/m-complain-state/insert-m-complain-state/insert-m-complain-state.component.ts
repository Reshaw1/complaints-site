import { Component, OnInit } from '@angular/core';
import { Complain_State } from 'src/app/models/Complain_State';
import { ComplainStateService } from '../complain-state.service';

@Component({
  selector: 'app-insert-m-complain-state',
  templateUrl: './insert-m-complain-state.component.html',
  styleUrls: ['./insert-m-complain-state.component.scss']
})
export class InsertMComplainStateComponent implements OnInit {
  complainState: Complain_State;


  constructor(private complainStateService: ComplainStateService) { }

  ngOnInit(): void {
    this.complainState = new Complain_State;
  }

  onCreateComplainState() {
    console.log(JSON.parse(JSON.stringify(this.complainState)));
    this.complainStateService.createComplainState(this.complainState).subscribe(res => {
      window.alert("Se ha insertado Correctamente")
    })
  }
}
