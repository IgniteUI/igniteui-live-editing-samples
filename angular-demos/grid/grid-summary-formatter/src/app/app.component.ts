import { Component } from "@angular/core";
import { GridSummaryFormatterComponent } from "./grid/grid-summary-formatter/grid-summary-formatter.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridSummaryFormatterComponent]
})
export class AppComponent {}