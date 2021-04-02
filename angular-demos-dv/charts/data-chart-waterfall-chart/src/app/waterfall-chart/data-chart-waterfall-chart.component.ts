import { Component } from "@angular/core";

@Component({
  selector: "app-data-chart-waterfall-chart",
  templateUrl: "./data-chart-waterfall-chart.component.html",
  styleUrls: ["./data-chart-waterfall-chart.component.scss"]
})
export class DataChartWaterfallChartComponent {

    public data = [
        { Category : "Revenue", Value : 55, NetIncomeValue : 0 },	 
        { Category : "Cost of Revenue", Value : 45, NetIncomeValue : 0 },	 
        { Category : "Research and Development", Value : 35, NetIncomeValue : 0 }, 
        { Category : "Marketing and Sales", Value : 28, NetIncomeValue : 0 },
        { Category : "General and Administrative", Value : 25, NetIncomeValue : 0}, 
        { Category : "Total Costs and Expenses", Value : 55, NetIncomeValue : 0  }, 
        { Category : "Net Income", Value : 0, NetIncomeValue : 25 }, 
    ];

    constructor() { }

}
