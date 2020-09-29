import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { IgxSparklineComponent } from "igniteui-angular-charts";
import { Visibility } from "igniteui-angular-core";

import { SharedData } from "../SharedData";

@Component({
    selector: "app-sparkline-normal-range",
    styleUrls: ["./sparkline-normal-range.component.scss"],
    templateUrl: "./sparkline-normal-range.component.html"
})
export class SparklineNormalRangeComponent implements AfterViewInit {

    public data: any[];

    @ViewChild("sparkline", { static: true })
    public sparkline: IgxSparklineComponent;
    constructor() {
        this.data = SharedData.getSharedData();
    }

    public onRangeVisibilityChanged(e: any) {
        const selection = e.target.checked as boolean;

        if (selection) {
            this.sparkline.normalRangeVisibility = Visibility.Visible;
        } else {
            this.sparkline.normalRangeVisibility = Visibility.Collapsed;
        }
    }

    public onMinSliderChanged(e: any) {
        this.sparkline.normalRangeMinimum = e.target.value;
    }

    public onMaxSliderChanged(e: any) {
        this.sparkline.normalRangeMaximum = e.target.value;
    }

    public ngAfterViewInit(): void {
        this.sparkline.normalRangeVisibility = Visibility.Visible;
    }
}
