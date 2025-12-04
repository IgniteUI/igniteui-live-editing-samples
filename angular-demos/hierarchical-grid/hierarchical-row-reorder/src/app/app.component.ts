import { Component } from "@angular/core";
import { HGridRowReorderComponent } from "./hierarchical-grid/hierarchical-grid-row-reorder/hierarchical-grid-row-reorder.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridRowReorderComponent]
})
export class AppComponent {}