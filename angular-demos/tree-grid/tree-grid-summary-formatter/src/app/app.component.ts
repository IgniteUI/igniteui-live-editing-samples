import { Component } from "@angular/core";
import { TreeGridSummaryFormatterComponent } from "./tree-grid-summary-formatter/tree-grid-summary-formatter.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridSummaryFormatterComponent]
})
export class AppComponent {}