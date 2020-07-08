import { Component, OnInit } from "@angular/core";
import { athletesData } from "../services/data";

@Component({
    selector: "app-grid-conditional-cell-style",
    styleUrls: ["./grid-conditional-cell-style.component.scss"],
    templateUrl: "./grid-conditional-cell-style.component.html"
})
export class GridConditionalCellStyleComponent implements OnInit {
    public data: any[];

    public ngOnInit() {
        this.data = athletesData;
    }

    private upFontCondition = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] > 95;
    }

    private downFontCondition = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] <= 95;
    }

    private top100Condition = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] <= 100;
    }

    private belowTop100Condition = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] > 100;
    }

    private speedCondition = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] < 5;
    }

    // tslint:disable-next-line:member-ordering
    public beatsPerMinuteClasses = {
        downFont: this.downFontCondition,
        upFont: this.upFontCondition

    };

    // tslint:disable-next-line:member-ordering
    public rankClasses = {
        belowTop100: this.belowTop100Condition,
        top100: this.top100Condition
    };

    // tslint:disable-next-line:member-ordering
    public speedClasses = {
        "topSpeed topSpeedFont": this.speedCondition
    };
}
