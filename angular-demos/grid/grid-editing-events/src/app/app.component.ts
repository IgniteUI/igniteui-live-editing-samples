import { Component } from "@angular/core";
import { GridEditingEventsComponent } from "./grid/grid-editing-events/grid-editing-events.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridEditingEventsComponent]
})
export class AppComponent {}