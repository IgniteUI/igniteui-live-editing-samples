import { Component } from "@angular/core";
import { GridColumnSelectionComponent } from "./grid/column-selection-sample/column-selection-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridColumnSelectionComponent]
})
export class AppComponent {}