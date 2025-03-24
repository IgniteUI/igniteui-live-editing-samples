import { Component } from "@angular/core";
import { TimePickerSample1Component } from "./timepicker-sample-1/timepicker-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TimePickerSample1Component]
})
export class AppComponent {}