import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CalibratorService } from "../services/calibrator.service";

@Component({
  selector: "app-calibrator-details",
  templateUrl: "./calibrator-details.component.html",
  styleUrls: ["./calibrator-details.component.css"]
})
export class CalibratorDetailsComponent implements OnInit {
  currentCalibrator = null;
  message = "";
  constructor(
    private calibratorService: CalibratorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = "";
    this.getCalibrator(this.route.snapshot.paramMap.get("id"));
  }

  getCalibrator(id): void {
    this.calibratorService.get(id).subscribe(
      data => {
        this.currentCalibrator = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateCalibrator(): void {
    this.calibratorService
      .update(this.currentCalibrator.id, this.currentCalibrator)
      .subscribe(
        response => {
          console.log(response);
          this.message = "The calibrator was updated successfully!";
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteCalibrator(): void {
    this.calibratorService.delete(this.currentCalibrator.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(["/calibrators"]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
