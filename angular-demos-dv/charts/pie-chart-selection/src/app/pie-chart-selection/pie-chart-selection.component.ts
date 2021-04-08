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
            { Value: 25, Label: "Residential Appliance", },
            { Value: 12, Label: "Heating", },
            { Value: 8, Label: "Lighting", },
            { Value: 18, Label: "Other Services", },
            { Value: 37, Label: "Space Cooling", },
         ];

        this.selectionType = "Single";
    }

    public ngAfterViewInit(): void {
        this.chart.selectedItem = this.data[3];
    }
}
