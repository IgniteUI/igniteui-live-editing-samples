import { Component } from "@angular/core";
import { HGridSortingStylingComponent } from "./hierarchical-grid/hierarchical-grid-sorting-styling/hierarchical-grid-sorting-styling.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridSortingStylingComponent]
})
export class AppComponent {}