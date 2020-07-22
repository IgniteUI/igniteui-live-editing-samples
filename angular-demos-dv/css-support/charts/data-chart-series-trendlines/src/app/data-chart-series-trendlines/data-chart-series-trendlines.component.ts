import { Component, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { SampleFinancialData } from "../SampleFinancialData";

@Component({
    selector: "app-data-chart-series-trendlines",
    styleUrls: ["./data-chart-series-trendlines.component.css"],
    templateUrl: "./data-chart-series-trendlines.component.html"
})
export class DataChartSeriesTrendlinesComponent {

    public data: any[];
    public trendlineType: string = "CubicFit";

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    constructor() {
        this.initData();
    }

    public initData() {
        this.data = SampleFinancialData.create();
    }

    public addDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }
}
