import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts";
import { IgxGeographicMapComponent, IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldLocations } from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-marker-type",
  styleUrls: ["./map-marker-type.component.scss"],
  templateUrl: "./map-marker-type.component.html"
})

export class MapMarkerTypeComponent implements AfterViewInit {

    public markerType: string = "Circle";
    public markerBrush: string = "White";
    public markerOutline: string = "DodgerBlue";

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;
    public symbolSeries: IgxGeographicSymbolSeriesComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {

        this.symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        this.symbolSeries.dataSource = WorldLocations.getCapitals();
        this.symbolSeries.markerType = MarkerType.Circle;
        this.symbolSeries.latitudeMemberPath = "lat";
        this.symbolSeries.longitudeMemberPath = "lon";
        this.symbolSeries.markerBrush  = "White";
        this.symbolSeries.markerOutline = "DodgerBlue";
        this.map.series.add(this.symbolSeries);
    }

    public onMarkerSelectionChanged = (e: any) => {
        const marker = e.target.value.toString();
        this.symbolSeries.markerType = marker;
    }
    public onBrushSelectionChanged = (e: any) => {
        const brush = e.target.value.toString();
        this.symbolSeries.markerBrush = brush;
    }

    public onOutlineSelectionChanged = (e: any) => {
        const outline = e.target.value.toString();
        this.symbolSeries.markerOutline = outline;
    }
}
