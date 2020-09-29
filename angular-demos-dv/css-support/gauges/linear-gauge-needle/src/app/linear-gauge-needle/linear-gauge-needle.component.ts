import { Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-linear-gauge-needle",
  styleUrls: [ "./linear-gauge-needle.component.css"],
  templateUrl: "./linear-gauge-needle.component.html"
})

export class LinearGaugeNeedleComponent {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;
}
