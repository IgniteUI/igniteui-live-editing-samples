import { Component } from "@angular/core";

@Component({
  selector: "app-data-chart-bar-chart-single-source",
  templateUrl: "./data-chart-bar-chart-single-source.component.html",
  styleUrls: ["./data-chart-bar-chart-single-source.component.scss"]
})
export class DataChartBarChartSingleSourceComponent {

    public data = [

        {Shop: "Amazon",                      Percent: 63},
        {Shop: "Search Engines",              Percent: 48},
        {Shop: "Retailer Sites",              Percent: 33},
        {Shop: "Other Marketplaces",          Percent: 25},
        {Shop: "At the Website of the Brand", Percent: 21},
        {Shop: "Comparison Sites",            Percent: 10},
        {Shop: "Social Media",                Percent: 8 },
        {Shop: "Other",                       Percent: 2 }
    ];

    constructor() { }
}
