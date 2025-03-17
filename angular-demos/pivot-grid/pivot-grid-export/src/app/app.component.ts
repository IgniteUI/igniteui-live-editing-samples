import { Component } from "@angular/core";
import { PivotExportComponent } from "./pivot-grid/pivot-export/pivot-export.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PivotExportComponent]
})
export class AppComponent {}