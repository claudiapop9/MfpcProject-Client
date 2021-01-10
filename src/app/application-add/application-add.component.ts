import { Component, OnInit } from "@angular/core";
import { ApplicationService } from "../services/application.service";

@Component({
  selector: "app-application-add",
  templateUrl: "./application-add.component.html",
  styleUrls: ["./application-add.component.css"]
})
export class ApplicationAddComponent implements OnInit {
  application = {
    id: "",
    calibratorId: "",
    departmentId: "",
    lotId: "",
    data: ""
  };
  submitted = false;
  constructor(private applicationService: ApplicationService) { }
  ngOnInit(): void { }

  saveApplication(): void {
    const data = {
      calibratorId: this.application.calibratorId,
      departmentId: this.application.departmentId,
      lotId: this.application.lotId,
      data: this.application.data
    };

    this.applicationService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newApplication(): void {
    this.submitted = false;
    this.application = {
      id: "",
      calibratorId: "",
      departmentId: "",
      lotId: "",
      data: ""
    };
  }
}
