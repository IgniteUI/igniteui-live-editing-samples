import { Component } from "@angular/core";
import { GridRowReorderComponent } from "./grid/grid-row-reorder-sample/grid-row-reorder";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridRowReorderComponent]
})
export class AppComponent {}