import { Component } from "@angular/core";
import { GridLiteFilteringPipelineComponent } from "./grid-lite/grid-lite-filtering-pipeline/grid-lite-filtering-pipeline.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteFilteringPipelineComponent]
})
export class AppComponent {}