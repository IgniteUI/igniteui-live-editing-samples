import { Component } from "@angular/core";
import { GridLiteSortingSimpleComponent } from "./grid-lite/grid-lite-sorting-simple/grid-lite-sorting-simple.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteSortingSimpleComponent]
})
export class AppComponent {}