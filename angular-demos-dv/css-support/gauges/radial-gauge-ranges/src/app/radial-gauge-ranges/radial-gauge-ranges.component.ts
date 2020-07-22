import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-radial-gauge-ranges",
  styleUrls: [ "./radial-gauge-ranges.component.css"],
  templateUrl: "./radial-gauge-ranges.component.html"
})
export class RadialGaugeRangesComponent implements OnInit {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;

    public ngOnInit(): void {

        // changing defaults to highlight current feature
        this.radialGauge.scaleBrush = "#e8e8e8";
    }
}
