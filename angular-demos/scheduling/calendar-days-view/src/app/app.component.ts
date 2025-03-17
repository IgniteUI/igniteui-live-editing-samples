import { Component } from "@angular/core";
import { CalendarDaysViewComponent } from "./calendar-days-view/calendar-days-view.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarDaysViewComponent]
})
export class AppComponent {}