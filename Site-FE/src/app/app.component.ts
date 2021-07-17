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
  user_Type: number

  constructor(private router: Router) {}


  onLogin(event) {
    this.person_ID = parseInt(event[0]);
    this.user_Type =  parseInt(event[1]);
    this.login = true;
    if(this.user_Type == 2) {
      this.router.navigate(["/complains"], {
        queryParams: {
          personId: this.person_ID,
          userType: this.user_Type },
      });
    } else {
      this.router.navigate(["/m-complain"], {
        queryParams: {
          personId: this.person_ID,
          userType: this.user_Type },
      });
    }
  }

  onNavComplain() {
    this.router.navigate(["/complains"], {
      queryParams: {
        personId: this.person_ID,
        userType: this.user_Type },
    });
  }

  onNavMComplain() {
    this.router.navigate(["/m-complain"], {
      queryParams: {
        personId: this.person_ID,
        userType: this.user_Type },
    });
  }

  onNavClaim() {
    this.router.navigate(["/claim"], {
      queryParams: {
        personId: this.person_ID,
        userType: this.user_Type },
    });
  }

  onNavMClaim() {
    this.router.navigate(["/m-claim"], {
      queryParams: {
        personId: this.person_ID,
        userType: this.user_Type },
    });
  }

  onNavMComplainType() {
    this.router.navigate(["/m-complain-type"], {
      queryParams: {
        personId: this.person_ID,
        userType: this.user_Type },
    });
  }

  onNavMClaimType() {
    this.router.navigate(["/m-claim-type"], {
      queryParams: {
        personId: this.person_ID,
        userType: this.user_Type },
    });
  }

  onNavMComplainState() {
    this.router.navigate(["/m-complain-state"], {
      queryParams: {
        personId: this.person_ID,
        userType: this.user_Type },
    });
  }

  onNavMClaimState() {
    this.router.navigate(["/m-claim-state"], {
      queryParams: {
        personId: this.person_ID,
        userType: this.user_Type },
    });
  }

  onNavMDepartment() {
    this.router.navigate(["/m-department"], {
      queryParams: {
        personId: this.person_ID,
        userType: this.user_Type },
    });
  }
}
