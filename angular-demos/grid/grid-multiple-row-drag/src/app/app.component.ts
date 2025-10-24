import { Component } from "@angular/core";
import { GridMultipleRowDragComponent } from "./grid/grid-multiple-row-drag/grid-multiple-row-drag.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMultipleRowDragComponent]
})
export class AppComponent {}