import { Component } from "@angular/core";
import { GridPinningDragSampleComponent } from "./grid/grid-row-pinning-drag/grid-row-pinning-drag.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridPinningDragSampleComponent]
})
export class AppComponent {}