import { Component, ViewChild } from "@angular/core";

import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-bullet-graph-tickmarks",
  styleUrls: [ "./bullet-graph-tickmarks.component.scss"],
  templateUrl: "./bullet-graph-tickmarks.component.html"
})

export class BulletGraphTickmarksComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;

}
