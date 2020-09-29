import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-radial-gauge-scale",
  styleUrls: [ "./radial-gauge-scale.component.css"],
  templateUrl: "./radial-gauge-scale.component.html"
})
export class RadialGaugeScaleComponent {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;
}
