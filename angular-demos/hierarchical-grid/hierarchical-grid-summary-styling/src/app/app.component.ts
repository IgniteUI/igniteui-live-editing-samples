import { Component } from "@angular/core";
import { HGridSummaryStylingComponent } from "./hierarchical-grid/hierarchical-grid-summary-styling/hierarchical-grid-summary-styling.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridSummaryStylingComponent]
})
export class AppComponent {}