import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pie-chart-styling",
  styleUrls: ["./pie-chart-styling.component.scss"],
  templateUrl: "./pie-chart-styling.component.html"
})
export class PieChartStylingComponent {

public data: any;

constructor() {
    this.data = [           
            { Value: 25, Label: "Residential Appliance", },
            { Value: 12, Label: "Heating", },
            { Value: 8, Label: "Lighting", },                
            { Value: 18, Label: "Other Services", },
            { Value: 37, Label: "Space Cooling", },
         ];
  }
}
