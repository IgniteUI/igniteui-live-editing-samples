import { Component } from "@angular/core";
import { CalendarMultiViewComponent } from "./multiview/multiview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CalendarMultiViewComponent]
})
export class AppComponent {}