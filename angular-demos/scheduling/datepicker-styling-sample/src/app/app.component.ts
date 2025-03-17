import { Component } from "@angular/core";
import { DatepickerStylingSampleComponent } from "./scheduling/datepicker/datepicker-styling-sample/datepicker-styling-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DatepickerStylingSampleComponent]
})
export class AppComponent {}