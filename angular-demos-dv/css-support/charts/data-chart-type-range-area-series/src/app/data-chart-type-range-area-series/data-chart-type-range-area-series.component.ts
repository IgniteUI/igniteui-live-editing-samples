import { Component } from "@angular/core";
import { SampleRangeData } from "../SampleRangeData";

@Component({
    selector: "app-data-chart-type-range-area-series",
    templateUrl: "./data-chart-type-range-area-series.component.html",
    styleUrls: ["./data-chart-type-range-area-series.component.css"]
})
export class DataChartTypeRangeAreaSeriesComponent {

    public data: any[] = SampleRangeData.create();
    constructor() { }
}
