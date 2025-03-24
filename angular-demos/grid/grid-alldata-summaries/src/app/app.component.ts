import { Component } from "@angular/core";
import { GridAllDataSummaryComponent } from "./grid/grid-allData-summary/grid-allData-summary.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridAllDataSummaryComponent]
})
export class AppComponent {}