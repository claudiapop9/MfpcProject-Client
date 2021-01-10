import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CalibratorComponent } from "./calibrator/calibrator.component";
import { LotComponent } from "./lot/lot.component";
import { ApplicationComponent } from "./application/application.component";
import { RouterModule } from "@angular/router";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { CalibratorAddComponent } from "./calibrator-add/calibrator-add.component";
import { DepartmentAddComponent } from "./department-add/department-add.component";
import { CalibratorDetailsComponent } from "./calibrator-details/calibrator-details.component";
import { CalibratorService } from "./services/calibrator.service";
import { DepartmentService } from "./services/department.service";
import { DepartmentComponent } from "./department/department.component";
import {APP_BASE_HREF} from '@angular/common';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { ApplicationAddComponent } from './application-add/application-add.component';
import { ApplicationService } from "./services/application.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "applications", pathMatch: "full" },
      { path: "applications", component: ApplicationComponent },
      { path: "add-application", component: ApplicationAddComponent },
      { path: "departments", component: DepartmentComponent },
      { path: "add-departments", component: DepartmentAddComponent },
      { path: "departments/:id", component: DepartmentDetailsComponent },
      { path: "calibrators", component: CalibratorComponent },
      { path: "calibrators/:id", component: CalibratorDetailsComponent },
      { path: "add-calibrator", component: CalibratorAddComponent }
    ]),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CalibratorComponent,
    LotComponent,
    ApplicationComponent,
    TopBarComponent,
    CalibratorAddComponent,
    DepartmentAddComponent,
    CalibratorDetailsComponent,
    DepartmentComponent,
    DepartmentDetailsComponent,
    ApplicationDetailsComponent,
    ApplicationAddComponent
  ],
  bootstrap: [AppComponent],
  providers: [[{provide: APP_BASE_HREF, useValue: '/'}], CalibratorService, DepartmentService, ApplicationService]
})
export class AppModule {}
