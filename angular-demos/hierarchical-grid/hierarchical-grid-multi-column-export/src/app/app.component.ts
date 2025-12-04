import { Component } from "@angular/core";
import { HGridMultiColumnHeadersExportComponent } from "./hierarchical-grid/hierarchical-grid-multi-column-headers-export/hierarchical-grid-multi-column-export.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridMultiColumnHeadersExportComponent]
})
export class AppComponent {}