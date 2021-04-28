import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxDoughnutChartComponent } from "igniteui-angular-charts";
import { IgxRingSeriesComponent } from "igniteui-angular-charts";

@Component({
    selector: "app-doughnut-chart-explosion-sample",
    styleUrls: ["./doughnut-chart-explosion-sample.component.scss"],
    templateUrl: "./doughnut-chart-explosion-sample.component.html"
})
export class DoughnutChartExplosionSampleComponent implements AfterViewInit {

    public data: any;

    @ViewChild("chart", { static: true })
    public chart: IgxDoughnutChartComponent;

    constructor() {
        this.data = [
            { Value: 37, Label: "Cooling", Summary: "Cooling 37%" },
            { Value: 25, Label: "Residential", Summary: "Residential 25%"  },
            { Value: 12, Label: "Heating", Summary: "Heating 12%" },
            { Value: 11, Label: "Lighting", Summary: "Lighting 11%" },
            { Value: 18, Label: "Other", Summary: "Other 18%" }
        ];
    }

    public pieSliceClickEvent(e: any): void {
        e.args.isExploded = !e.args.isExploded;
    }

    public ngAfterViewInit(): void {
        let series: IgxRingSeriesComponent;
        series = this.chart.actualSeries[0] as IgxRingSeriesComponent;
        series.explodedSlices.add(3);
    }
}
