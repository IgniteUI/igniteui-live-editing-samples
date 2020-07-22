import { Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-linear-gauge-scale",
  styleUrls: [ "./linear-gauge-scale.component.css"],
  templateUrl: "./linear-gauge-scale.component.html"
})

export class LinearGaugeScaleComponent {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;

}
