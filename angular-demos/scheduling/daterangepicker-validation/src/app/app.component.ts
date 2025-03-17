import { Component } from "@angular/core";
import { DateRangePickerValidationComponent } from "./daterangepicker-validation/daterangepicker-validation";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DateRangePickerValidationComponent]
})
export class AppComponent {}