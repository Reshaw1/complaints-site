import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

import { MyMaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComplainsComponent } from './complains/complains.component';
import { ClaimsComponent } from './claims/claims.component';
import { ViewClaimComponent } from './claims/view-claim/view-claim.component';
import { InsertClaimComponent } from './claims/insert-claim/insert-claim.component';
import { InsertComplainComponent } from './complains/insert-complain/insert-complain.component';
import { ViewComplainComponent } from './complains/view-complain/view-complain.component';

import { AgGridModule } from "ag-grid-angular";
import { PersonComponent } from './cell-renderers/person/person.component';
import { DepartmentComponent } from './cell-renderers/department/department.component';
import { ComplainStateComponent } from './cell-renderers/complain-state/complain-state.component';
import { ComplainTypeComponent } from './cell-renderers/complain-type/complain-type.component';
import { DateComponent } from './cell-renderers/date/date.component';
import { ClaimTypeComponent } from './cell-renderers/claim-type/claim-type.component';
import { ClaimStateComponent } from './cell-renderers/claim-state/claim-state.component';
import { MDepartmentComponent } from './m-department/department.component';
import { MComplainsComponent } from './m-complains/m-complains.component';
import { MClaimsComponent } from './m-claims/m-claims.component';
import { MComplainStateComponent } from './m-complain-state/m-complain-state.component';
import { MComplainTypeComponent } from './m-complain-type/m-complain-type.component';
import { MClaimStateComponent } from './m-claim-state/m-claim-state.component';
import { MClaimTypeComponent } from './m-claim-type/m-claim-type.component';
import { ResponseComponent } from './response/response.component';
import { ViewMComplainComponent } from './m-complains/view-m-complain/view-m-complain.component';
import { ViewMClaimComponent } from './m-claims/view-m-claim/view-m-claim.component';
import { ViewDepartmentComponent } from './m-department/view-department/view-department.component';
import { InsertDepartmentComponent } from './m-department/insert-department/insert-department.component';
import { ViewMComplainStateComponent } from './m-complain-state/view-m-complain-state/view-m-complain-state.component';
import { InsertMComplainStateComponent } from './m-complain-state/insert-m-complain-state/insert-m-complain-state.component';
import { ViewMComplainTypeComponent } from './m-complain-type/view-m-complain-type/view-m-complain-type.component';
import { InsertMComplainTypeComponent } from './m-complain-type/insert-m-complain-type/insert-m-complain-type.component';
import { ViewMClaimStateComponent } from './m-claim-state/view-m-claim-state/view-m-claim-state.component';
import { InsertMClaimStateComponent } from './m-claim-state/insert-m-claim-state/insert-m-claim-state.component';
import { ViewMClaimTypeComponent } from './m-claim-type/view-m-claim-type/view-m-claim-type.component';
import { InsertMClaimTypeComponent } from './m-claim-type/insert-m-claim-type/insert-m-claim-type.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    ComplainsComponent,
    ClaimsComponent,
    ViewClaimComponent,
    InsertClaimComponent,
    InsertComplainComponent,
    ViewComplainComponent,
    PersonComponent,
    DepartmentComponent,
    ComplainStateComponent,
    ComplainTypeComponent,
    DateComponent,
    ClaimTypeComponent,
    ClaimStateComponent,
    MDepartmentComponent,
    MComplainsComponent,
    MClaimsComponent,
    MComplainStateComponent,
    MComplainTypeComponent,
    MClaimStateComponent,
    MClaimTypeComponent,
    ResponseComponent,
    ViewMComplainComponent,
    ViewMClaimComponent,
    ViewDepartmentComponent,
    InsertDepartmentComponent,
    ViewMComplainStateComponent,
    InsertMComplainStateComponent,
    ViewMComplainTypeComponent,
    InsertMComplainTypeComponent,
    ViewMClaimStateComponent,
    InsertMClaimStateComponent,
    ViewMClaimTypeComponent,
    InsertMClaimTypeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
