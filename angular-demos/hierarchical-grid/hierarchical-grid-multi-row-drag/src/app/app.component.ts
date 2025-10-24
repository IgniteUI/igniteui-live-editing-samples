import { Component } from "@angular/core";
import { HGridMultiRowDragComponent } from "./hierarchical-grid/hierarchical-grid-multi-row-drag/hierarchical-grid-multi-row-drag.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridMultiRowDragComponent]
})
export class AppComponent {}