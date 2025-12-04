import { Component } from "@angular/core";
import { HGridResizeLineStylingComponent } from "./hierarchical-grid/hierarchical-grid-resize-line-styling/hierarchical-grid-resize-line-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridResizeLineStylingComponent]
})
export class AppComponent {}