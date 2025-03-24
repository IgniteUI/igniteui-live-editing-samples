import { Component } from "@angular/core";
import { GridSelectionSampleComponent } from "./grid/grid-sample-selection/grid-selection.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridSelectionSampleComponent]
})
export class AppComponent {}