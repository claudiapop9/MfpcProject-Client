import { Component, OnInit } from "@angular/core";
import { CalibratorService } from "../services/calibrator.service";

@Component({
  selector: "app-calibrator-add",
  templateUrl: "./calibrator-add.component.html",
  styleUrls: ["./calibrator-add.component.css"]
})
export class CalibratorAddComponent implements OnInit {
  calibrator = {
    id: "",
    value: "",
    unit: ""
  };
  submitted = false;
  constructor(private calibratorService: CalibratorService) {}
  ngOnInit(): void {}

  saveCalibrator(): void {
    const data = {
      value: this.calibrator.value,
      unit: this.calibrator.unit
    };

    this.calibratorService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newCalibrator(): void {
    this.submitted = false;
    this.calibrator = {
      id: "",
      value: "",
      unit: ""
    };
  }
}
