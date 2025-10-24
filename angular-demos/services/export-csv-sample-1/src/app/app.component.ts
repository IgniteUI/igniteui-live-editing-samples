import { Component } from "@angular/core";
import { CsvExportSample1Component } from "./services/csv-export-sample-1/csv-export-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CsvExportSample1Component]
})
export class AppComponent {}