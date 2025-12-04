import { Component } from "@angular/core";
import { HGridSummaryFormatterComponent } from "./hierarchical-grid/hierarchical-grid-summary-formatter/hierarchical-grid-summary-formatter.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridSummaryFormatterComponent]
})
export class AppComponent {}