import { Component } from "@angular/core";
import { TreeGridCsvExportSample1Component } from "./services/csv-export-tree-grid-sample/csv-export-tree-grid-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridCsvExportSample1Component]
})
export class AppComponent {}