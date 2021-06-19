import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { ComplainsComponent } from './complains/complains.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
