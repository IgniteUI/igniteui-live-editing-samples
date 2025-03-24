import { Component } from "@angular/core";
import { HierarchicalGridColumnGroupSelectionComponent } from "./hierarchical-grid/column-group-selection/hierarchical-grid-column-group-selection.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridColumnGroupSelectionComponent]
})
export class AppComponent {}