import { Component } from "@angular/core";
import { SampleFinancialData } from "../SampleFinancialData";

@Component({
    selector: "app-data-chart-type-financial-candlestick-series",
    templateUrl: "./data-chart-type-financial-candlestick-series.component.html",
    styleUrls: ["./data-chart-type-financial-candlestick-series.component.css"]
})
export class DataChartTypeFinancialCandlestickSeriesComponent {

    public data: any = SampleFinancialData.create();
    public displayTypeIndicator: string = "Line";

    constructor() { }

}
