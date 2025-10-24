import { Component } from "@angular/core";
import { MonthpickerSample1Component } from "./monthpicker-sample-1/monthpicker-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [MonthpickerSample1Component]
})
export class AppComponent {}