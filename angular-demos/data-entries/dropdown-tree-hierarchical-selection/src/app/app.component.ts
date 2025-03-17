import { Component } from "@angular/core";
import { DropdownTreeHierarchicalSelectionComponent } from "./dropdown-tree-hierarchical-selection/dropdown-tree-hierarchical-selection.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DropdownTreeHierarchicalSelectionComponent]
})
export class AppComponent {}