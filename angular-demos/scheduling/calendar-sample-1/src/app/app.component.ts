import { Component } from "@angular/core";
import { CalendarSample1Component } from "./calendar-sample-1/calendar-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarSample1Component]
})
export class AppComponent {}