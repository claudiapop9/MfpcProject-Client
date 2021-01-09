import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CalibratorComponent } from "./calibrator/calibrator.component";
import { LotComponent } from "./lot/lot.component";
import { DepartmentsComponent } from "./departments/departments.component";
import { ApplicationComponent } from "./application/application.component";
import { RouterModule } from "@angular/router";
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: "", component: ApplicationComponent }])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CalibratorComponent,
    LotComponent,
    DepartmentsComponent,
    ApplicationComponent,
    TopBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
