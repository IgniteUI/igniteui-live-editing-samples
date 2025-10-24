import { Component } from "@angular/core";
import { TreeGridSummaryStylingComponent } from "./tree-grid-summary-styling/tree-grid-summary-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridSummaryStylingComponent]
})
export class AppComponent {}