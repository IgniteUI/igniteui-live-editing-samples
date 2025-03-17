import { Component } from "@angular/core";
import { HierarchicalGridColumnSelectionComponent } from "./hierarchical-grid/column-selection/hierarchical-grid-column-selection.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridColumnSelectionComponent]
})
export class AppComponent {}