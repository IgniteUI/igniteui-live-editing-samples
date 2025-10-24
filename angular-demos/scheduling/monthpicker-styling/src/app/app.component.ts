import { Component } from "@angular/core";
import { MonthpickerStylingComponent } from "./monthpicker-styling/monthpicker-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [MonthpickerStylingComponent]
})
export class AppComponent {}