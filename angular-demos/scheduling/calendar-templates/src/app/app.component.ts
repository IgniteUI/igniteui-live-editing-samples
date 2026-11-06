import { Component } from "@angular/core";
import { CalendarTemplatesComponent } from "./calendar-templates/calendar-templates.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarTemplatesComponent]
})
export class AppComponent {}