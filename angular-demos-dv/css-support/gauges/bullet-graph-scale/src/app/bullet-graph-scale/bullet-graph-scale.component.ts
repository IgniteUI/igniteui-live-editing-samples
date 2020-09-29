import { Component, ViewChild } from "@angular/core";

import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-bullet-graph-scale",
  styleUrls: [ "./bullet-graph-scale.component.css"],
  templateUrl: "./bullet-graph-scale.component.html"
})

export class BulletGraphScaleComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;
}
