import { Component, OnInit, ViewChild } from "@angular/core";
import {
    IgxGridComponent,
    IPinningConfig,
    RowPinningPosition
} from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
    selector: "grid-row-pinning-styling",
    templateUrl: "grid-row-pinning-styling.component.html",
    styleUrls: ["./grid-row-pinning-styling.component.scss"]
})

export class GridRowPinningStylingSampleComponent implements OnInit {
    public data: any[];

    @ViewChild("grid1", { static: true })
    public grid: IgxGridComponent;

    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top };

    constructor() {
        this.data = DATA;
    }

    public ngOnInit() {
        this.grid.pinRow(this.data[0].ID);
        this.grid.pinRow(this.data[3].ID);
    }
}
