import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxPieChartComponent } from "igniteui-angular-charts";

@Component({
    selector: "app-pie-chart-selection",
    styleUrls: ["./pie-chart-selection.component.scss"],
    templateUrl: "./pie-chart-selection.component.html"
})
export class PieChartSelectionComponent implements AfterViewInit {

    public selectionType: string;
    public data: any;

    @ViewChild("chart", { static: true })
    public chart: IgxPieChartComponent;

    constructor() {
        this.data = [
            { Value: 37, Label: "Space Cooling", Summary: "Space Cooling 37%" },
            { Value: 25, Label: "Residential Appliance", Summary: "Residential Appliance 25%"  },
            { Value: 12, Label: "Heating", Summary: "Heating 12%" },
            { Value: 8, Label: "Lighting", Summary: "Lighting 8%" },                
            { Value: 18, Label: "Other Services", Summary: "Other Services 18%" }
        ];

        this.selectionType = "Single";
    }

    public ngAfterViewInit(): void {
        this.chart.selectedItem = this.data[3];
    }
}
