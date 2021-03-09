import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "app-doughnut-chart-legend",
    styleUrls: ["./doughnut-chart-legend.component.scss"],
    templateUrl: "./doughnut-chart-legend.component.html"
})
export class DoughnutChartLegendComponent {

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

    public chartSliceClickEvent(e: any): void {
        e.args.isExploded = !e.args.isExploded;
    }

}
