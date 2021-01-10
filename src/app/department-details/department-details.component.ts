import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DepartmentService } from "../services/department.service";

@Component({
  selector: "app-department-details",
  templateUrl: "./department-details.component.html",
  styleUrls: ["./department-details.component.css"]
})
export class DepartmentDetailsComponent implements OnInit {
  currentDepartment = null;
  message = "";
  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = "";
    this.getDepartment(this.route.snapshot.paramMap.get("id"));
  }

  getDepartment(id): void {
    this.departmentService.get(id).subscribe(
      data => {
        this.currentDepartment = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateDepartment(): void {
    this.departmentService
      .update(this.currentDepartment.id, this.currentDepartment)
      .subscribe(
        response => {
          console.log(response);
          this.message = "The department was updated successfully!";
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteDepartment(): void {
    this.departmentService.delete(this.currentDepartment.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(["/departments"]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
