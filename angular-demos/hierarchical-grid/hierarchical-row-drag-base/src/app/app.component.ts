import { Component } from "@angular/core";
import { HGridRowDragBaseComponent } from "./hierarchical-grid/hierarchical-grid-row-drag-base/hierarchical-row-drag-base.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridRowDragBaseComponent]
})
export class AppComponent {}