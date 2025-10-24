import { Component } from "@angular/core";
import { HGridSummarySampleComponent } from "./hierarchical-grid/hierarchical-grid-summary/hierarchical-grid-summary.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridSummarySampleComponent]
})
export class AppComponent {}