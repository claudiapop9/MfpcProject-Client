import { Component, OnInit } from "@angular/core";
import { applications } from "../applications";

@Component({
  selector: "app-application",
  templateUrl: "./application.component.html",
  styleUrls: ["./application.component.css"]
})
export class ApplicationComponent implements OnInit {
  constructor() {}
  applications = applications;
  ngOnInit() {}
}
