import { Component } from "@angular/core";
import { TreeGridCellSelectionComponent } from "./tree-grid/tree-grid-cellSelection-sample/tree-grid-cellSelection.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridCellSelectionComponent]
})
export class AppComponent {}