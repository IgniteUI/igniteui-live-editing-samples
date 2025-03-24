import { Component } from "@angular/core";
import { GridSummaryTemplateComponent } from "./grid/grid-summary-template/grid-summary-template.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridSummaryTemplateComponent]
})
export class AppComponent {}