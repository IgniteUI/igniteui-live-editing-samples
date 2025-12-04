import { Component } from "@angular/core";
import { ExcelExportComponent } from "./services/export-excel/excel-export.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ExcelExportComponent]
})
export class AppComponent {}