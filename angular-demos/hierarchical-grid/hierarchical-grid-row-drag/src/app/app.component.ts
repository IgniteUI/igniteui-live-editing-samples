import { Component } from "@angular/core";
import { HGridDragSampleComponent } from "./hierarchical-grid/hierarchical-grid-row-drag/hierarchical-grid-row-drag.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridDragSampleComponent]
})
export class AppComponent {}