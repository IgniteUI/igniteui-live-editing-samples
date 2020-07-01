import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { athletesData } from "../services/data";

@Component({
    selector: "custom-grid-paging-style-sample",
    styleUrls: ["custom-grid-paging-style.component.css"],
    templateUrl: "custom-grid-paging-style.component.html"
})

export class CustomGridPagingStyleSample {
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = athletesData;
    }

    public removeRow(rowIndex) {
        const row = this.grid1.getRowByIndex(rowIndex);
        row.delete();
    }
}
