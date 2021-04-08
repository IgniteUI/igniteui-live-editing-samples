import { Component } from "@angular/core";

@Component({
    selector: "app-pie-chart-legend",
    styleUrls: ["./pie-chart-legend.component.scss"],
    templateUrl: "./pie-chart-legend.component.html"
})
export class PieChartLegendComponent {

    public data: any;

    constructor() {
        this.data = [
            { Value: 37, Label: "Space Cooling", Summary: "Space Cooling 37%" },
            { Value: 25, Label: "Residential Appliance", Summary: "Residential Appliance 25%" },
            { Value: 12, Label: "Heating", Summary: "Heating 12%" },
            { Value: 8, Label: "Lighting", Summary: "Lighting 8%" }
        ];
    }
}
