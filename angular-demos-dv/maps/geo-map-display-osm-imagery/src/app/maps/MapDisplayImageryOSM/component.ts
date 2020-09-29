import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxOpenStreetMapImagery } from "igniteui-angular-maps";

@Component({
  selector: "app-MapDisplayImageryOSM",
  styleUrls: ["./component.scss"],
  templateUrl: "./component.html"
})

export class MapDisplayImageryOSM implements AfterViewInit {

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;

    constructor() {
    }

    public ngAfterViewInit(): void {
        const tileSource = new IgxOpenStreetMapImagery();
        this.map.backgroundContent = tileSource;

        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
    }
}
