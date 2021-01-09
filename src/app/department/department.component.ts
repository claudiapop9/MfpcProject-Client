import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DepartmentService } from "../services/department.service";
@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.css"]
})
export class DepartmentComponent implements OnInit {
  departments: any;
  currentDepartment = null;
  currentIndex = -1;
  value = "";
  constructor(private departmentService: DepartmentService, private router:Router) {}

  ngOnInit(): void {
    this.retrieveDepartments();
  }

  retrieveDepartments(): void {
    this.departmentService.getAll().subscribe(
      data => {
        this.departments = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveDepartments();
    this.currentDepartment = null;
    this.currentIndex = -1;
  }

  setActiveDepartment(department, index): void {
    this.currentDepartment = department;
    this.currentIndex = index;
  }

  goToAddDepartments(): void{
    const navigationDetails: string[] = ['/add-departments'];
    this.router.navigate(navigationDetails);
  }
}
