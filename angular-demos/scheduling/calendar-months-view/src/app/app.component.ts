import { Component } from "@angular/core";
import { CalendarMonthsViewComponent } from "./calendar-months-view/calendar-months-view.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarMonthsViewComponent]
})
export class AppComponent {}