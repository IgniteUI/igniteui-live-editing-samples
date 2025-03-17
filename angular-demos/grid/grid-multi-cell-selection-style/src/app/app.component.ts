import { Component } from "@angular/core";
import { GridMultiCellSelectionStyleComponent } from "./grid/grid-multi-cell-selection-style/grid-multi-cell-selection-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMultiCellSelectionStyleComponent]
})
export class AppComponent {}