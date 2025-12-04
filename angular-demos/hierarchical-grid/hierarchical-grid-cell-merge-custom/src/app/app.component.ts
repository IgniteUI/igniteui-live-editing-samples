import { Component } from "@angular/core";
import { HGridCellMergeCustomComponent } from "./hierarchical-grid/hierarchical-grid-cell-merge-custom/hierarchical-grid-cell-merge-custom.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridCellMergeCustomComponent]
})
export class AppComponent {}