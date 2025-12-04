import { Component } from "@angular/core";
import { HGridStylingComponent } from "./hierarchical-grid/hierarchical-grid-styling/hierarchical-grid-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridStylingComponent]
})
export class AppComponent {}