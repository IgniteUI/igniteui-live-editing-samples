import { Component } from "@angular/core";
import { DateRangePickerModeComponent } from "./daterangepicker-mode/daterangepicker-mode";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DateRangePickerModeComponent]
})
export class AppComponent {}