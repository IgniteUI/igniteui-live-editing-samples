import { Component } from "@angular/core";
import { ExcelExportSample1Component } from "./services/excel-export-sample-1/excel-export-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ExcelExportSample1Component]
})
export class AppComponent {}