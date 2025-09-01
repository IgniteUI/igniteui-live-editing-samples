import { Component } from "@angular/core";
import { HGridCellMergeComponent } from "./hierarchical-grid/hierarchical-grid-cell-merge/hierarchical-grid-cell-merge.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridCellMergeComponent]
})
export class AppComponent {}