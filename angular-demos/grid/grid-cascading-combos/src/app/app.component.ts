import { Component } from "@angular/core";
import { GridCascadingCombosComponent } from "./grid/grid-cascading-combos/grid-cascading-combos.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridCascadingCombosComponent]
})
export class AppComponent {}