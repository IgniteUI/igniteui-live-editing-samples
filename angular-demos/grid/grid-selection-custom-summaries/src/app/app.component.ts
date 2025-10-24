import { Component } from "@angular/core";
import { GridCustomSummariesSelectionComponent } from "./grid/grid-custom-summaries-selection/grid-custom-summaries-selection.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridCustomSummariesSelectionComponent]
})
export class AppComponent {}