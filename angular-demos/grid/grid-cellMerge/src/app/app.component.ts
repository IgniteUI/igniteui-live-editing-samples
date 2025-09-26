import { Component } from "@angular/core";
import { GridCellMergeSampleComponent } from "./grid/grid-cell-merge-sample/grid-cell-merge-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridCellMergeSampleComponent]
})
export class AppComponent {}