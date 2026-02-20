import { Component } from "@angular/core";
import { ExportPdfCustomFontComponent } from "./services/export-pdf-custom-font/export-pdf-custom-font.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ExportPdfCustomFontComponent]
})
export class AppComponent {}