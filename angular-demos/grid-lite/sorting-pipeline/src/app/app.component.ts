import { Component } from "@angular/core";
import { GridLiteSortingPipelineComponent } from "./grid-lite/grid-lite-sorting-pipeline/grid-lite-sorting-pipeline.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteSortingPipelineComponent]
})
export class AppComponent {}