import { Component } from "@angular/core";
import { HGridSummaryExportComponent } from "./hierarchical-grid/hgrid-summary-export/hgrid-summary-export.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridSummaryExportComponent]
})
export class AppComponent {}