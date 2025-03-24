import { Component } from "@angular/core";
import { PivotDataSelectorSampleComponent } from "./pivot-grid/pivot-datasource/pivot-data-selector-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PivotDataSelectorSampleComponent]
})
export class AppComponent {}