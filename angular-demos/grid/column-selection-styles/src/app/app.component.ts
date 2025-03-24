import { Component } from "@angular/core";
import { GridColumnSelectionStylesComponent } from "./grid/column-selection-styles/column-selection-styles.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridColumnSelectionStylesComponent]
})
export class AppComponent {}