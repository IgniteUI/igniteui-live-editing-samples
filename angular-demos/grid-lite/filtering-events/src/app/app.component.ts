import { Component } from "@angular/core";
import { GridLiteFilteringEventsComponent } from "./grid-lite/grid-lite-filtering-events/grid-lite-filtering-events.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteFilteringEventsComponent]
})
export class AppComponent {}