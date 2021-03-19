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
            { Value: 37, Label: "Space Cooling", },
            { Value: 25, Label: "Residential Appliance", },
            { Value: 12, Label: "Heating", },
            { Value: 8, Label: "Lighting", },                
            { Value: 18, Label: "Other Services", }
         ];
  }
}
