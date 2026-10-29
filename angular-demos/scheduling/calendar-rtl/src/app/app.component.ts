import { Component } from "@angular/core";
import { CalendarRtlComponent } from "./calendar-rtl/calendar-rtl.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarRtlComponent]
})
export class AppComponent {}