import { Component } from "@angular/core";
import { GridLiteSortingEventsComponent } from "./grid-lite/grid-lite-sorting-events/grid-lite-sorting-events.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteSortingEventsComponent]
})
export class AppComponent {}