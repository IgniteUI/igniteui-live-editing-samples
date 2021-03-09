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
            { Value: 37, Label: "Space Cooling", Summary: "Space Cooling 37%" },
            { Value: 25, Label: "Residential Appliance", Summary: "Residential Appliance 25%"  },
            { Value: 12, Label: "Heating", Summary: "Heating 12%" },
            { Value: 8, Label: "Lighting", Summary: "Lighting 8%" },                
            { Value: 18, Label: "Other Services", Summary: "Other Services 18%" }
        ];
      }

    public pieSliceClickEvent(e: any): void {
        e.args.isExploded = !e.args.isExploded;
    }

    public ngAfterViewInit(): void {
        this.chart.explodedSlices.add(3);
    }
}
