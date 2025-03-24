import { Component } from "@angular/core";
import { TreeGridEditingEventsComponent } from "./tree-grid/tree-grid-editing-events/tree-grid-editing-events.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridEditingEventsComponent]
})
export class AppComponent {}