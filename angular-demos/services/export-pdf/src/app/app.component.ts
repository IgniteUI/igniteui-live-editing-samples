import { Component } from "@angular/core";
import { PdfExportComponent } from "./services/export-pdf/pdf-export.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PdfExportComponent]
})
export class AppComponent {}