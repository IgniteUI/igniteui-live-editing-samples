import { Component } from "@angular/core";

@Component({
    selector: "app-pie-chart-others",
    styleUrls: ["./pie-chart-others.component.scss"],
    templateUrl: "./pie-chart-others.component.html"
})
export class PieChartOthersComponent {

    public data: any;

    constructor() {
        this.data = [
            { Value: 25, Label: "Residential" },
            { Value: 12, Label: "Heating" },
            { Value: 11, Label: "Lighting" },
            { Value: 18, Label: "Other" },
            { Value: 37, Label: "Cooling" }
        ];
    }
}
