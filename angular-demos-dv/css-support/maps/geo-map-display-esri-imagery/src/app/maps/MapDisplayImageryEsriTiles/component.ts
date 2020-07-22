import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxArcGISOnlineMapImagery } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";

import { EsriStyle, EsriUtility } from "../../utilities/EsriUtility";

@Component({
  selector: "app-MapDisplayImageryEsriTiles",
  styleUrls: ["./component.css"],
  templateUrl: "./component.html"
})

export class MapDisplayImageryEsriTiles implements AfterViewInit {

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;

    constructor() {
    }

    public ngAfterViewInit(): void {
        const tileSource = new IgxArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);
        // or
        // tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";
        this.map.backgroundContent = tileSource;

        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
    }
}
