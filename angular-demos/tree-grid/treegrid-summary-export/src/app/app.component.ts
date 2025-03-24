import { Component } from "@angular/core";
import { TreeGridSummaryExportComponent } from "./tree-grid-summary-export/tree-grid-summary-export.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridSummaryExportComponent]
})
export class AppComponent {}