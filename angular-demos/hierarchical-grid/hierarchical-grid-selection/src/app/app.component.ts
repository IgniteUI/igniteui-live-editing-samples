import { Component } from "@angular/core";
import { HGridSelectionSampleComponent } from "./hierarchical-grid/hierarchical-grid-selection/hierarchical-grid-selection.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridSelectionSampleComponent]
})
export class AppComponent {}