import { Component } from "@angular/core";
import { StyledDateRangePickerComponent } from "./daterangepicker-styling/daterangepicker-styling";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [StyledDateRangePickerComponent]
})
export class AppComponent {}