import { Component } from "@angular/core";
import { HGridEditingEventsComponent } from "./hierarchical-grid/hierarchical-grid-editing-events/hierarchical-grid-editing-events.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridEditingEventsComponent]
})
export class AppComponent {}