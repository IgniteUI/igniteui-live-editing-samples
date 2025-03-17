import { Component } from "@angular/core";
import { CalendarSample3Component } from "./calendar-sample-3/calendar-sample-3.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarSample3Component]
})
export class AppComponent {}