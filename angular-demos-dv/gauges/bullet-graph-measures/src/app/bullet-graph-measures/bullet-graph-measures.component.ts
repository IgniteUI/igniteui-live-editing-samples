import { Component, ViewChild } from "@angular/core";

import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  selector: "app-bullet-graph-measures",
  styleUrls: [ "./bullet-graph-measures.component.scss"],
  templateUrl: "./bullet-graph-measures.component.html"
})

export class BulletGraphMeasuresComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;

}
