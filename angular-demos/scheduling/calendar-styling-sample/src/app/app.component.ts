import { Component } from "@angular/core";
import { CalendarStylingSampleComponent } from "./calendar-styling-sample/calendar-styling-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarStylingSampleComponent]
})
export class AppComponent {}