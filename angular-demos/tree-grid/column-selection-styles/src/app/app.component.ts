import { Component } from "@angular/core";
import { TreeGridColumnSelectionStylesComponent } from "./tree-grid/column-selection-styles/tree-grid-column-selection-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridColumnSelectionStylesComponent]
})
export class AppComponent {}