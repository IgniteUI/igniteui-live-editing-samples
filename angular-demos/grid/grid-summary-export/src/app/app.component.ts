import { Component } from "@angular/core";
import { GridSummaryExportComponent } from "./grid/grid-summary-export/grid-summary-export.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridSummaryExportComponent]
})
export class AppComponent {}