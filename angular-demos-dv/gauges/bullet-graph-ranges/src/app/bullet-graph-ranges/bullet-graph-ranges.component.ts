import { Component, ViewChild } from "@angular/core";

import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-bullet-graph-ranges",
  styleUrls: [ "./bullet-graph-ranges.component.scss"],
  templateUrl: "./bullet-graph-ranges.component.html"
})

export class BulletGraphRangesComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;
}
