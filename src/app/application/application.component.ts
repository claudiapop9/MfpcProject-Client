import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { applications } from "../applications";
import { ApplicationService } from "../services/application.service";

@Component({
  selector: "app-application",
  templateUrl: "./application.component.html",
  styleUrls: ["./application.component.css"]
})
export class ApplicationComponent implements OnInit {
  applications: any;
  currentApplication = null;
  currentIndex = -1;
  value = "";
  constructor(private applicationService: ApplicationService, private router:Router) {}

  ngOnInit(): void {
    this.retrieveApplications();
  }

  retrieveApplications(): void {
    this.applicationService.getAll().subscribe(
      data => {
        this.applications = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveApplications();
    this.currentApplication = null;
    this.currentIndex = -1;
  }

  setActiveApplication(application, index): void {
    this.currentApplication = application;
    this.currentIndex = index;
  }

  goToAddApplications(): void{
    const navigationDetails: string[] = ['/add-application'];
    this.router.navigate(navigationDetails);
  }
}
