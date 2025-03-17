import { Component } from "@angular/core";
import { CalendarSample5Component } from "./calendar-sample-5/calendar-sample-5.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarSample5Component]
})
export class AppComponent {}