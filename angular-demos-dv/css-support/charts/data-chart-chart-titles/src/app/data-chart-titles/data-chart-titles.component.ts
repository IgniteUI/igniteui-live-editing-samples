import { Component, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts";
import { IgxLegendComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { SharedData } from "../SharedData";

@Component({
    selector: "app-data-chart-titles",
    styleUrls: ["./data-chart-titles.component.css"],
    templateUrl: "./data-chart-titles.component.html"
})
export class DataChartTitlesComponent {

    public data: any[];

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    @ViewChild("legend", { static: true })
    public legend: IgxLegendComponent;

    constructor() {
        this.initData();
    }

    public initData() {
        this.data = SharedData.getEnergyProduction();
    }
}
