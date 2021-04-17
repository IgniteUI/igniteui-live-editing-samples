import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxPieChartComponent } from "igniteui-angular-charts";

@Component({
  selector: "app-pie-chart-explosion",
  styleUrls: ["./pie-chart-explosion.component.scss"],
  templateUrl: "./pie-chart-explosion.component.html"
})
export class PieChartExplosionComponent implements AfterViewInit {

    public data: any;

    @ViewChild("chart", { static: true })
    public chart: IgxPieChartComponent;

    constructor() {
        this.data = [
            { MarketShare : 25, Company : "Residential" },
            { MarketShare : 12, Company : "Heating" },
            { MarketShare : 8,  Company : "Lighting" },
            { MarketShare : 18, Company : "Other" },
            { MarketShare : 37, Company : "Cooling" }
        ];
    }

    public pieSliceClickEvent(e: any): void {
        e.args.isExploded = !e.args.isExploded;
    }

    public ngAfterViewInit(): void {
        this.chart.explodedSlices.add(3);
    }
}
