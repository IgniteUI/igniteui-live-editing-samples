import { Component } from "@angular/core";
import { HGridMultiCellStyleComponent } from "./hierarchical-grid/hierarchical-grid-multi-cell-style/hierarchical-grid-multi-cell-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridMultiCellStyleComponent]
})
export class AppComponent {}