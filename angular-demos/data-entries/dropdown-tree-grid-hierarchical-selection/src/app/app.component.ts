import { Component } from "@angular/core";
import { DropdownTreeGridHierarchicalSelectionComponent } from "./dropdown-tree-grid-hierarchical-selection/dropdown-tree-grid-hierarchical-selection.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DropdownTreeGridHierarchicalSelectionComponent]
})
export class AppComponent {}