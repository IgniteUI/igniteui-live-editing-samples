import { Component } from "@angular/core";
import { SortingStylingComponent } from "./grid/grid-sorting-styling/grid-sorting-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SortingStylingComponent]
})
export class AppComponent {}