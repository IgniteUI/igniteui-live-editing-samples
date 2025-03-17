import { Component } from "@angular/core";
import { CalendarYearsViewComponent } from "./calendar-years-view/calendar-years-view.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarYearsViewComponent]
})
export class AppComponent {}