import { Component } from "@angular/core";
import { CalendarSample4Component } from "./scheduling/calendar/calendar-sample-4/calendar-sample-4.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarSample4Component]
})
export class AppComponent {}