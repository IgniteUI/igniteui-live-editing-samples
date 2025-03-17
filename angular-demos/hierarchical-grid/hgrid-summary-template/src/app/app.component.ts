import { Component } from "@angular/core";
import { HGridSummaryTemplateComponent } from "./hierarchical-grid/hgrid-summary-template/hgrid-summary-template.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridSummaryTemplateComponent]
})
export class AppComponent {}