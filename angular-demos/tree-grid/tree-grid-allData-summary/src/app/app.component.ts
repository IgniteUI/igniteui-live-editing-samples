import { Component } from "@angular/core";
import { TreeGridAllDataSummaryComponent } from "./tree-grid/treegrid-allData-summary/treegrid-allData-summary.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridAllDataSummaryComponent]
})
export class AppComponent {}