import { Component } from "@angular/core";
import { SamplePolarData } from "../SamplePolarData";
import { IgxPolarLineSeriesComponent } from "igniteui-angular-charts";

@Component({
  selector: "app-data-chart-polar-area-chart",
  templateUrl: "./data-chart-polar-area-chart.component.html",
  styleUrls: ["./data-chart-polar-area-chart.component.scss"]
})
export class DataChartPolarAreaChartComponent {

    public data: any[];

    constructor() {
        this.initData(); 
    }

    public initData(){

        this.data = [
            { Direction: 0,   BoatSpeed: 70,  WindSpeed: 90 },
            { Direction: 45,  BoatSpeed: 35,  WindSpeed: 65 },
            { Direction: 90,  BoatSpeed: 25,  WindSpeed: 45 },
            { Direction: 135, BoatSpeed: 15,  WindSpeed: 25 },
            { Direction: 180, BoatSpeed:  0,  WindSpeed: 0  },
            { Direction: 225, BoatSpeed: 15,  WindSpeed: 25 },
            { Direction: 270, BoatSpeed: 25,  WindSpeed: 45 },
            { Direction: 315, BoatSpeed: 35,  WindSpeed: 65 },
            { Direction: 360, BoatSpeed: 70,  WindSpeed: 90 }
        ];
    }
}
