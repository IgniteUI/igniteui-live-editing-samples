import { Component, ViewChild } from "@angular/core";
import { IgxSparklineComponent } from "igniteui-angular-charts";

import { SharedData } from "../SharedData";

@Component({
    selector: "app-sparkline-trendlines",
    styleUrls: ["./sparkline-trendlines.component.css"],
    templateUrl: "./sparkline-trendlines.component.html"
})
export class SparklineTrendlinesComponent {

    public data: any[];

    @ViewChild("sparkline", { static: true })
    public sparkline: IgxSparklineComponent;

    constructor() {
        this.data = SharedData.getSharedData();
    }

    public onTrendlineChanged(e: any) {
        const selection = e.target.value.toString();
        this.sparkline.trendLineType = selection;
    }
}
