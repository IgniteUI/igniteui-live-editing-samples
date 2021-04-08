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
            { Value: 25, Label: "Residential Appliance", },
            { Value: 12, Label: "Heating", },
            { Value: 8,  Label: "Lighting", },
            { Value: 18, Label: "Other Services", },
            { Value: 37, Label: "Space Cooling", },
        ];
    }
}
