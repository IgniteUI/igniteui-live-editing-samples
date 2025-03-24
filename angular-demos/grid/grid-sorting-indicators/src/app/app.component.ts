import { Component } from "@angular/core";
import { GridSortingIndicatorsComponent } from "./grid/grid-sorting-indicators/grid-sorting-indicators.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridSortingIndicatorsComponent]
})
export class AppComponent {}