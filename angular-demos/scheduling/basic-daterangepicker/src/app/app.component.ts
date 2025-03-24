import { Component } from "@angular/core";
import { BasicDateRangePickerComponent } from "./daterangepicker-basic/daterangepicker-basic";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BasicDateRangePickerComponent]
})
export class AppComponent {}