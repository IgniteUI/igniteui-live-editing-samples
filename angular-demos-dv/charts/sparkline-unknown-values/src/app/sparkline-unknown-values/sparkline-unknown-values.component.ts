import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { IgxSparklineComponent } from "igniteui-angular-charts";
import { UnknownValuePlotting } from "igniteui-angular-core";

import { SharedData } from "../SharedData";

@Component({
    selector: "app-sparkline-unknown-values",
    styleUrls: ["./sparkline-unknown-values.component.scss"],
    templateUrl: "./sparkline-unknown-values.component.html"
})
export class SparklineUnknownValuesComponent implements AfterViewInit {

    @ViewChild("sparkline", { static: true })
    public sparkline: IgxSparklineComponent;

    public data: any[];

    constructor() {
        this.data = SharedData.getSharedDataWithNullValues();
    }

    public onRangeVisibilityChanged(e: any) {
        const selection = e.target.checked as boolean;

        if (selection) {
            this.sparkline.unknownValuePlotting = UnknownValuePlotting.LinearInterpolate;
        } else {
            this.sparkline.unknownValuePlotting = UnknownValuePlotting.DontPlot;
        }
    }

    public ngAfterViewInit(): void {
        this.sparkline.unknownValuePlotting = UnknownValuePlotting.LinearInterpolate;
    }
}
