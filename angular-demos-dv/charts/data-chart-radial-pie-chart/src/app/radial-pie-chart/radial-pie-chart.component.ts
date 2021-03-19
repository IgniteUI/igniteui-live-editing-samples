import { Component } from "@angular/core";
import { SampleRadialData } from "../SampleRadialData";

@Component({
    selector: "app-radial-pie-chart",
    templateUrl: "./radial-pie-chart.component.html",
    styleUrls: ["./radial-pie-chart.component.scss"]
})
export class DataChartRadialPieChartComponent {
    public data: any[] = SampleRadialData.create();
    constructor() { }
}
