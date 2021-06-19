import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Site-FE';
  login: boolean = false;
  person_ID: number

  constructor(private router: Router) {}


  onLogin(event) {
    this.person_ID = event
    this.login = true;
    this.router.navigate(["/complains"], {
      queryParams: { personId: this.person_ID },
    });
  }

  onNavComplain() {
    this.router.navigate(["/complains"], {
      queryParams: { personId: this.person_ID },
    });
  }

  onNavClaim() {
    this.router.navigate(["/claim"], {
      queryParams: { personId: this.person_ID },
    });
  }
}
