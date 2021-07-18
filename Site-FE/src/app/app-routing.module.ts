import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { ComplainsComponent } from './complains/complains.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MClaimStateComponent } from './m-claim-state/m-claim-state.component';
import { MClaimTypeComponent } from './m-claim-type/m-claim-type.component';
import { MClaimsComponent } from './m-claims/m-claims.component';
import { MComplainStateComponent } from './m-complain-state/m-complain-state.component';
import { MComplainTypeComponent } from './m-complain-type/m-complain-type.component';
import { MComplainsComponent } from './m-complains/m-complains.component';
import { MDepartmentComponent } from './m-department/department.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  {
    path: "register",
    component: RegistrationComponentComponent,
  },
  {
    path: "login",
    component: LoginComponentComponent,
  },
  {
    path: "complains",
    component: ComplainsComponent,
  },
  {
    path: "claim",
    component: ClaimsComponent,
  },
  {
    path: "m-complain",
    component: MComplainsComponent,
  },
  {
    path: "m-claim",
    component: MClaimsComponent,
  },
  {
    path: "m-complain-state",
    component: MComplainStateComponent,
  },
  {
    path: "m-claim-state",
    component: MClaimStateComponent,
  },
  {
    path: "m-complain-type",
    component: MComplainTypeComponent,
  },
  {
    path: "m-claim-type",
    component: MClaimTypeComponent,
  },
  {
    path: "m-department",
    component: MDepartmentComponent,
  },
  {
    path: "response",
    component: ResponseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
