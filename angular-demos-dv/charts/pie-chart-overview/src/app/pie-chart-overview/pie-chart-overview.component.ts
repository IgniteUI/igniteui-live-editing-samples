import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-pie-chart-overview",
    styleUrls: ["./pie-chart-overview.component.scss"],
    templateUrl: "./pie-chart-overview.component.html"
})
export class PieChartDataSampleComponent {

    public data: any;

    constructor() {
        this.data = [
            { MarketShare: 25, Company: "Residential Appliance", },
            { MarketShare: 12, Company: "Heating", },
            { MarketShare: 8, Company: "Lighting", },
            { MarketShare: 18, Company: "Other Services", },
            { MarketShare: 37, Company: "Space Cooling", }
        ];
    }
}
