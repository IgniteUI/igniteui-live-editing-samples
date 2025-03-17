import { Component } from "@angular/core";
import { TimePickerStylingComponent } from "./timepicker-styling/timepicker-styling.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TimePickerStylingComponent]
})
export class AppComponent {}