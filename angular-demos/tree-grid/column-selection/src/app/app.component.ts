import { Component } from "@angular/core";
import { TreeGridColumnSelectionComponent } from "./tree-grid/column-selection/tree-grid-column-selection.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridColumnSelectionComponent]
})
export class AppComponent {}