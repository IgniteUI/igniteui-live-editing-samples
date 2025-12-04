import { Component } from "@angular/core";
import { TreeGridCellMergeComponent } from "./tree-grid/tree-grid-cell-merge-sample/tree-grid-cell-merge-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridCellMergeComponent]
})
export class AppComponent {}