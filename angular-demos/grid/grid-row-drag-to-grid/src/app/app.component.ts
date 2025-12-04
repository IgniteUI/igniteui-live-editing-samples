import { Component } from "@angular/core";
import { GridDragToGridSampleComponent } from "./grid/grid-row-drag-to-grid/grid-row-drag-to-grid.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridDragToGridSampleComponent]
})
export class AppComponent {}