import { Component } from "@angular/core";
import { HGridColumnSelectionStylesComponent } from "./hierarchical-grid/column-selection-styles/hierarchical-grid-column-selection-styles.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridColumnSelectionStylesComponent]
})
export class AppComponent {}