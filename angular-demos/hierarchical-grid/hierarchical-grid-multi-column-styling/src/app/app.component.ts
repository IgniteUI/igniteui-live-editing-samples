import { Component } from "@angular/core";
import { HGridMultiHeadersStylingComponent } from "./hierarchical-grid/hierarchical-grid-multi-column-headers-styling/hierarchical-grid-multi-column-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridMultiHeadersStylingComponent]
})
export class AppComponent {}