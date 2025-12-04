import { Component } from "@angular/core";
import { DateRangePickerStartEndComponent } from "./daterangepicker-start-end/daterangepicker-start-end";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DateRangePickerStartEndComponent]
})
export class AppComponent {}