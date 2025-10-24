import { Component } from "@angular/core";
import { GridExportVisualizationComponent } from "./grid/grid-export-visualization/grid-export-visualization.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridExportVisualizationComponent]
})
export class AppComponent {}