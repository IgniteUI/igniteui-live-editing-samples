import { Component } from "@angular/core";
import { TreeGridMultiColumnHeadersExportComponent } from "./tree-grid/tree-grid-multi-column-headers-export/tree-grid-multi-column-headers-export.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridMultiColumnHeadersExportComponent]
})
export class AppComponent {}