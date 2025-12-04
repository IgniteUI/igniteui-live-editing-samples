import { Component } from "@angular/core";
import { TreeGridExportVisualizationComponent } from "./tree-grid-export-visualization/tree-grid-export-visualization.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridExportVisualizationComponent]
})
export class AppComponent {}