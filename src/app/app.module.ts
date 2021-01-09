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
import { DepartmentComponent } from "./department/department.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "applications", pathMatch: "full" },
      { path: "applications", component: ApplicationComponent },
      { path: "departments", component: DepartmentComponent },
      { path: "add-departments", component: DepartmentAddComponent },
      { path: "calibrators", component: CalibratorComponent },
      { path: "calibrator/:id", component: CalibratorDetailsComponent },
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
    DepartmentComponent
  ],
  bootstrap: [AppComponent],
  providers: [CalibratorService]
})
export class AppModule {}
