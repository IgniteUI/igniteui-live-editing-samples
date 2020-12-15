import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts";
import { IgxGeographicMapComponent, IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldLocations } from "../../utilities/WorldLocations";
import { DataTemplateMeasureInfo, DataTemplateRenderInfo } from "igniteui-angular-core";

@Component({
  selector: "app-map-marker-type",
  styleUrls: ["./map-marker-template.component.css"],
  templateUrl: "./map-marker-template.component.html"
})

export class MapMarkerTemplateComponent implements AfterViewInit {

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;
    public symbolSeries: IgxGeographicSymbolSeriesComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {

        this.symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        this.symbolSeries.dataSource = WorldLocations.getCapitals();
        this.symbolSeries.latitudeMemberPath = "lat";
        this.symbolSeries.longitudeMemberPath = "lon";
        this.symbolSeries.markerBrush  = "White";
        this.symbolSeries.markerOutline = "DodgerBlue";
        this.symbolSeries.markerTemplate = this.getMarker();
        this.map.series.add(this.symbolSeries);

        const geoRect = { left: -150.0, top: -60.0, width: 315.0, height: 140.0 };
        this.map.zoomToGeographic(geoRect);
    }

    public onMarkerSelectionChanged = (e: any) => {
        const marker = e.target.value.toString();
        this.symbolSeries.markerType = marker;
    }
    public getMarker(): any {
        const style = { outline: "#7D73E6", fill: "white", text: "black" };

        const size = 12;
        const radius = size / 2;
        return {
            measure(measureInfo: DataTemplateMeasureInfo) {
                const data = measureInfo.data;
                const context = measureInfo.context;
                let value = "0.00";
                const item = data.item as any;
                if (item != null) {
                    value = item.country.toString();
                }
                const height = context.measureText("M").width;
                const width = context.measureText(value).width;
                measureInfo.width = width;
                measureInfo.height = height + size;
            },
            render(renderInfo: DataTemplateRenderInfo) {
                const item = renderInfo.data.item as any;
                const value = item.country.toString();

                const ctx = renderInfo.context as CanvasRenderingContext2D;
                let x = renderInfo.xPosition;
                let y = renderInfo.yPosition;
                const halfWidth  = renderInfo.availableWidth / 2.0;
                const halfHeight = renderInfo.availableHeight / 2.0;

                if (renderInfo.isHitTestRender) {
                    ctx.fillStyle = renderInfo.data.actualItemBrush.fill;
                    ctx.fillRect(x, y, renderInfo.availableWidth, renderInfo.availableHeight);
                    return;
                } else {
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
                    ctx.fillStyle = style.fill;
                    ctx.fill();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = style.outline;
                    ctx.stroke();
                    ctx.closePath();
                }

                x = renderInfo.xPosition + 5;
                y = renderInfo.yPosition + 7.5;
                if (y < 0) {
                    y -= renderInfo.availableHeight + 7.5;
                }

                const bottomEdge = renderInfo.passInfo.viewportTop + renderInfo.passInfo.viewportHeight;
                if (y + renderInfo.availableHeight > bottomEdge) {
                    y -= renderInfo.availableHeight + 5;
                }

                const rightEdge = renderInfo.passInfo.viewportLeft + renderInfo.passInfo.viewportWidth;
                if (x + renderInfo.availableWidth > rightEdge) {
                    x -= renderInfo.availableWidth + 12;
                }

                ctx.beginPath();
                ctx.fillStyle = style.outline ;
                ctx.fillRect(x - 2, y - 2, renderInfo.availableWidth + 8, halfHeight + 6);
                ctx.closePath();

                ctx.font = "8pt Verdana";
                ctx.textBaseline = "top";
                ctx.fillStyle = style.fill;
                ctx.fillText(value, x + 2, y + 1);

            }
        };
    }

}
