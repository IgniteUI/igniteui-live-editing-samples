import { Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-linear-gauge-tickmarks",
  styleUrls: [ "./linear-gauge-tickmarks.component.scss"],
  templateUrl: "./linear-gauge-tickmarks.component.html"
})

export class LinearGaugeTickmarksComponent {

    @ViewChild("linearGauge", { static: true })
    public linearGauge: IgxLinearGaugeComponent;
}
