import { Component } from "@angular/core";
import { GridDragSampleComponent } from "./grid/grid-row-drag/grid-row-drag.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridDragSampleComponent]
})
export class AppComponent {}