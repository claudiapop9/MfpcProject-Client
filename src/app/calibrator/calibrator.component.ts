import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CalibratorService } from "../services/calibrator.service";
@Component({
  selector: "app-calibrator",
  templateUrl: "./calibrator.component.html",
  styleUrls: ["./calibrator.component.css"]
})
export class CalibratorComponent implements OnInit {
  calibrators: any;
  currentCalibrator = null;
  currentIndex = -1;
  value = "";
  constructor(private calibratorService: CalibratorService, private router:Router) {}

  ngOnInit(): void {
    this.retrieveCalibrators();
  }

  retrieveCalibrators(): void {
    this.calibratorService.getAll().subscribe(
      data => {
        this.calibrators = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveCalibrators();
    this.currentCalibrator = null;
    this.currentIndex = -1;
  }

  setActiveCalibrator(calibrator, index): void {
    this.currentCalibrator = calibrator;
    this.currentIndex = index;
  }

  goToAddCalibrators(): void{
    const navigationDetails: string[] = ['/add-calibrator'];
    this.router.navigate(navigationDetails);
  }
}
