import { Component } from "@angular/core";
import { HierarchicalGridCellSelectionComponent } from "./hierarchical-grid/hierarchical-grid-cellSelection-sample/hierarchical-grid-cellSelection.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridCellSelectionComponent]
})
export class AppComponent {}