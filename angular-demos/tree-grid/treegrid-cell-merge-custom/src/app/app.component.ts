import { Component } from "@angular/core";
import { TreeGridCellMergeCustomComponent } from "./tree-grid/tree-grid-cell-merge-custom-sample/tree-grid-cell-merge-custom-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridCellMergeCustomComponent]
})
export class AppComponent {}