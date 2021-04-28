import { Component } from "@angular/core";
import { SamplePolarData } from "../SamplePolarData";

@Component({
  selector: "app-data-chart-polar-area-chart-styling",
  templateUrl: "./data-chart-polar-area-chart-styling.component.html",
  styleUrls: ["./data-chart-polar-area-chart-styling.component.scss"]
})
export class DataChartPolarAreaChartStylingComponent {

    public data: any[] = SamplePolarData.create();

    constructor() { 
    }
}
