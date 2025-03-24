import { Component } from "@angular/core";
import { CalendarSample2Component } from "./calendar-sample-2/calendar-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarSample2Component]
})
export class AppComponent {}