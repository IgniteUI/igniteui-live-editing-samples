import { Component } from "@angular/core";
import { GridMultiColumnHeadersStylingComponent } from "./grid/multi-column-headers-styling/multi-column-headers-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMultiColumnHeadersStylingComponent]
})
export class AppComponent {}