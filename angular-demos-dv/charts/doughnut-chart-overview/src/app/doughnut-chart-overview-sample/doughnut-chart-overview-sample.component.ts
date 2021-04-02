import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-doughnut-chart-overview-sample",
    styleUrls: ["./doughnut-chart-overview-sample.component.scss"],
    templateUrl: "./doughnut-chart-overview-sample.component.html"
})
export class DoughnutChartOverviewSampleComponent {

    public data: any;

    constructor() {
        this.data = [
            { MarketShare : 30, Company : "Google" },
            { MarketShare : 25, Company : "Apple" },
            { MarketShare : 20, Company : "Microsoft" },
            { MarketShare : 15, Company : "Samsung"},
            { MarketShare : 10, Company : "Other" },
        ];
    }
}
