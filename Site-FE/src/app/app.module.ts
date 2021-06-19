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
    ClaimStateComponent

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
