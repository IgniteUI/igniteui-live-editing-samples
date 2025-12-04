import { Component } from "@angular/core";
import { DatepickerSample1Component } from "./datepicker-sample-1/datepicker-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DatepickerSample1Component]
})
export class AppComponent {}