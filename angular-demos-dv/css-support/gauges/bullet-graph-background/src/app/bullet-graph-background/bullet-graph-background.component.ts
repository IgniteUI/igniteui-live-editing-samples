import { Component, ViewChild } from "@angular/core";

import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-bullet-graph-background",
  styleUrls: [ "./bullet-graph-background.component.css"],
  templateUrl: "./bullet-graph-background.component.html"
})

export class BulletGraphBackgroundComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;

}
