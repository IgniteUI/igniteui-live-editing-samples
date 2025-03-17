import { Component } from "@angular/core";
import { GridSelectionTemplateExcelComponent } from "./grid/grid-sample-selection-template-excel/grid-sample-selection-template-excel.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridSelectionTemplateExcelComponent]
})
export class AppComponent {}