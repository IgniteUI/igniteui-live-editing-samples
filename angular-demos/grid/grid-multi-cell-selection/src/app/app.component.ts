import { Component } from "@angular/core";
import { GridMultiCellSelectionComponent } from "./grid/grid-multi-cell-selection/grid-multi-cell-selection.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMultiCellSelectionComponent]
})
export class AppComponent {}