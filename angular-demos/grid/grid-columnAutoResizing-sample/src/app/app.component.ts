import { Component } from "@angular/core";
import { GridColumnAutosizingComponent } from "./grid/grid-column-autosizing/grid-column-autosizing.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridColumnAutosizingComponent]
})
export class AppComponent {}