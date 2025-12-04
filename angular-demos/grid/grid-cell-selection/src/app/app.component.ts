import { Component } from "@angular/core";
import { GridCellSelectionComponent } from "./grid/grid-cellSelection-sample/grid-cellSelection.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridCellSelectionComponent]
})
export class AppComponent {}