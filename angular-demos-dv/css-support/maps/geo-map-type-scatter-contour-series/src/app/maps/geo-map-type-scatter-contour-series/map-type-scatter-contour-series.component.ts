import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxValueBrushScaleComponent } from "igniteui-angular-charts/ES5/igx-value-brush-scale-component";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";
import { IgxGeographicContourLineSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-contour-line-series-component";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";

@Component({
  selector: "app-map-type-scatter-contour-series",
  styleUrls: ["./map-type-scatter-contour-series.component.css"],
  templateUrl: "./map-type-scatter-contour-series.component.html"
})

export class MapTypeScatterContourSeriesComponent implements AfterViewInit {

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;

    @ViewChild("template", {static: true})
    public tooltip: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
        const sds = new ShapeDataSource();
        sds.shapefileSource = "https://www.infragistics.com/angular-demos-dv/assets/Shapes/WorldTemperatures.shp";
        sds.databaseSource  = "https://www.infragistics.com/angular-demos-dv/assets/Shapes/WorldTemperatures.dbf";
        sds.dataBind();
        sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
    }

    public onDataLoaded(sds: ShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded contour shapes: " + shapeRecords.length + " from /Shapes/WorldTemperatures.shp");

        const contourPoints: any[] = [];
        for (const record of shapeRecords) {
            const temp = record.fieldValues.Contour;
            // using only major contours (every 10th degrees Celsius)
            if (temp % 10 === 0 && temp >= 0) {
                for (const shapes of record.points) {
                     for (let i = 0; i < shapes.length; i++) {
                        if (i % 5 === 0) {
                            const p = shapes[i];
                            const item = { lon: p.x, lat: p.y, value: temp};
                            contourPoints.push(item);
                        }
                     }
                }
            }
        }

        console.log("loaded contour points: " + contourPoints.length);
        this.createContourSeries(contourPoints);
    }

    public createContourSeries(data: any[]) {
        const brushes = [
            "rgba(32, 146, 252, 0.5)", // semi-transparent blue
            "rgba(14, 194, 14, 0.5)",  // semi-transparent green
            "rgba(252, 120, 32, 0.5)", // semi-transparent orange
            "rgba(252, 32, 32, 0.5)"  // semi-transparent red
        ];

        const brushScale = new IgxValueBrushScaleComponent();
        brushScale.brushes = brushes;
        brushScale.minimumValue = 0;
        brushScale.maximumValue = 30;

        const contourSeries = new IgxGeographicContourLineSeriesComponent();
        contourSeries.dataSource = data;
        contourSeries.longitudeMemberPath = "lon";
        contourSeries.latitudeMemberPath = "lat";
        contourSeries.valueMemberPath = "value";
        contourSeries.fillScale = brushScale;
        contourSeries.tooltipTemplate = this.tooltip;
        contourSeries.thickness = 4;

        this.map.series.add(contourSeries);
    }
}
