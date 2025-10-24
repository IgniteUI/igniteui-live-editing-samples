import { Component } from "@angular/core";
import { HGridToolbarPinningComponent } from "./hierarchical-grid/hierarchical-grid-column-pinning/hierarchical-grid-toolbar-pinning.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridToolbarPinningComponent]
})
export class AppComponent {}