import { Component, ViewChild } from "@angular/core";
import { IgxColumnComponent, IgxTreeGridComponent } from "igniteui-angular";
import { generateEmployeeDetailedFlatData } from "../data/employees-flat-detailed";

@Component({
  selector: "app-tree-grid-column-moving-styled-sample",
  styleUrls: ["./tree-grid-column-moving-styled-sample.component.scss"],
  templateUrl: "./tree-grid-column-moving-styled-sample.component.html"
})
export class TreeGridColumnMovingStyledSampleComponent {

    public data: any[];
    @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

    public toggleColumnPinning(column: IgxColumnComponent) {
        column.pinned ? column.unpin() : column.pin();
    }
}
