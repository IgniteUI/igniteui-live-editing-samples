import { Component } from "@angular/core";
import { TreeGridSummaryTemplateComponent } from "./tree-grid/treegrid-summary-template/treegrid-summary-template.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridSummaryTemplateComponent]
})
export class AppComponent {}