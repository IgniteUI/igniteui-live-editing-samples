import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxDoughnutChartComponent } from "igniteui-angular-charts";
import { IgxRingSeriesComponent } from "igniteui-angular-charts";
import { IgxSliceClickEventArgs } from "igniteui-angular-charts";

@Component({
    selector: "app-doughnut-chart-selection-sample",
    styleUrls: ["./doughnut-chart-selection-sample.component.scss"],
    templateUrl: "./doughnut-chart-selection-sample.component.html"
})
export class DoughnutChartSelectionSampleComponent implements AfterViewInit {

    public data: any;
    public SelectedSliceLabel : string = "No Selection";
    public SelectedSliceValue : string = "0%";

    @ViewChild("chart", { static: true })
    public chart: IgxDoughnutChartComponent;

    constructor() {
        this.data = [
            { Value: 37, Label: "Space Cooling", Summary: "Space Cooling 37%" },
            { Value: 25, Label: "Residential Appliance", Summary: "Residential Appliance 25%"  },
            { Value: 12, Label: "Heating", Summary: "Heating 12%" },
            { Value: 8,  Label: "Lighting", Summary: "Lighting 8%" },                
            { Value: 18, Label: "Other Services", Summary: "Other Services 18%" }
        ];
       
    }
  
    
    public OnSliceClick(e: any ) {        
      
        if (e.args.isSelected)
        {          
            this.SelectedSliceLabel = this.data[e.args.index].Label;
            this.SelectedSliceValue = this.data[e.args.index].Value + "%";
        }
        else
        {
            this.SelectedSliceLabel = "No Selection";
            this.SelectedSliceValue = "0%";
        }
    }
    public ngAfterViewInit(): void {
      
    }

     
}
