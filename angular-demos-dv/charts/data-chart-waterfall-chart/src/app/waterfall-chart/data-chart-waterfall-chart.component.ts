import { Component } from "@angular/core";

@Component({
    selector: "app-data-chart-waterfall-chart",
    templateUrl: "./data-chart-waterfall-chart.component.html",
    styleUrls: ["./data-chart-waterfall-chart.component.scss"]
})
export class DataChartWaterfallChartComponent {

    public data = [
        { Category: "Revenue", Value: 55, NetIncome: Number.NaN },
        { Category: "Fixed Cost", Value: 45, NetIncome: Number.NaN },
        { Category: "Research", Value: 35, NetIncome: Number.NaN },
        { Category: "Marketing", Value: 30, NetIncome: Number.NaN },
        { Category: "Sales", Value: 25, NetIncome: Number.NaN },
        { Category: "Administration", Value: 20, NetIncome: Number.NaN },
        { Category: "Total Costs", Value: 55, NetIncome: Number.NaN },
        { Category: "Net Income", Value: Number.NaN, NetIncome: 20 }
    ];

    constructor() { }

}
