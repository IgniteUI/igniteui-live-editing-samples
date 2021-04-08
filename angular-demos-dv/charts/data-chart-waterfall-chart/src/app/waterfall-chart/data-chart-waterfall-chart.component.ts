import { Component } from "@angular/core";

@Component({
    selector: "app-data-chart-waterfall-chart",
    templateUrl: "./data-chart-waterfall-chart.component.html",
    styleUrls: ["./data-chart-waterfall-chart.component.scss"]
})
export class DataChartWaterfallChartComponent {

    public data = [
        { Category: "Revenue", Value: 55, NetIncomeValue: Number.NaN },
        { Category: "Cost of Revenue", Value: 45, NetIncomeValue: Number.NaN },
        { Category: "Research and Development", Value: 35, NetIncomeValue: Number.NaN },
        { Category: "Marketing and Sales", Value: 28, NetIncomeValue: Number.NaN },
        { Category: "General and Administrative", Value: 25, NetIncomeValue: Number.NaN },
        { Category: "Total Costs and Expenses", Value: 55, NetIncomeValue: Number.NaN },
        { Category: "Net Income", Value: Number.NaN, NetIncomeValue: 25 },
    ];

    constructor() { }

}
