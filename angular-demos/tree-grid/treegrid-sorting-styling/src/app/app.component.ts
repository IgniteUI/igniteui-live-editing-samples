import { Component } from "@angular/core";
import { TreeGridSortingStylingComponent } from "./tree-grid-sorting-styling/tree-grid-sorting-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridSortingStylingComponent]
})
export class AppComponent {}