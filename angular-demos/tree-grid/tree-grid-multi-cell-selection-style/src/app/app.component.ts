import { Component } from "@angular/core";
import { TreeGridMultiCellSelectionStyleComponent } from "./tree-grid-multi-cell-selection-style/tree-grid-multi-cell-selection-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridMultiCellSelectionStyleComponent]
})
export class AppComponent {}