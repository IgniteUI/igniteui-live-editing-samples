import { Component } from "@angular/core";
import { DateRangePickerRangeButtonsComponent } from "./daterangepicker-range-buttons/daterangepicker-range-buttons";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DateRangePickerRangeButtonsComponent]
})
export class AppComponent {}