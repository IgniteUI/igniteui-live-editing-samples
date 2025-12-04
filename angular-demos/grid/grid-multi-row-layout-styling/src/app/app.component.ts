import { Component } from "@angular/core";
import { GridMultiRowLayoutStylingComponent } from "./grid/grid-multi-row-layout-styling/grid-multi-row-layout-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMultiRowLayoutStylingComponent]
})
export class AppComponent {}