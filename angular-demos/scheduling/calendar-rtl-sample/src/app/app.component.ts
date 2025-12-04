import { Component } from "@angular/core";
import { CalendarRtlSampleComponent } from "./calendar-rtl-sample/calendar-rtl-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarRtlSampleComponent]
})
export class AppComponent {}