import { Component, OnInit } from "@angular/core";
import { DepartmentService } from "../services/department.service";

@Component({
  selector: "app-department-add",
  templateUrl: "./department-add.component.html",
  styleUrls: ["./department-add.component.css"]
})
export class DepartmentAddComponent implements OnInit {
  department = {
    id: "",
    name: "",
    country: ""
  };
  submitted = false;
  constructor(private departmentService: DepartmentService) {}
  ngOnInit(): void {}

  saveDepartment(): void {
    const data = {
      name: this.department.name,
      country: this.department.country
    };

    this.departmentService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newDepartment(): void {
    this.submitted = false;
    this.department = {
      id: "",
      name: "",
      country: ""
    };
  }
}
