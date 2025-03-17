import { Component } from "@angular/core";
import { CsvExportComponent } from "./services/export-csv/csv-export.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CsvExportComponent]
})
export class AppComponent {}