import { Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-linear-gauge-needle",
  styleUrls: [ "./linear-gauge-backing.component.scss"],
  templateUrl: "./linear-gauge-backing.component.html"
})

export class LinearGaugeBackingComponent {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;
}
