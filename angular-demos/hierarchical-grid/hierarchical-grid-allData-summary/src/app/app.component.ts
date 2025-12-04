import { Component } from "@angular/core";
import { HGridAllDataSummaryComponent } from "./hierarchical-grid/hierarchical-grid-allData-summary/hierarchical-grid-allData-summary.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridAllDataSummaryComponent]
})
export class AppComponent {}