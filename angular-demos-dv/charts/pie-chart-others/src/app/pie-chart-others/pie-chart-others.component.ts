import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pie-chart-others",
  styleUrls: ["./pie-chart-others.component.scss"],
  templateUrl: "./pie-chart-others.component.html"
})
export class PieChartOthersComponent {

    public data: any;

    constructor() {
        this.data = [           
            { Value: 37, Label: "Space Cooling", Summary: "Space Cooling 37%" },
            { Value: 25, Label: "Residential Appliance", Summary: "Residential Appliance 25%"  },
            { Value: 12, Label: "Heating", Summary: "Heating 12%" },
            { Value: 8, Label: "Lighting", Summary: "Lighting 8%" },                
            { Value: 18, Label: "Other Services", Summary: "Other Services 18%" }
        ];
      }
}
