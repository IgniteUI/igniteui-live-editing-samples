import { Component } from "@angular/core";
import { GridMultiColumnHeadersExportComponent } from "./grid/multi-column-headers-export/multi-column-headers-export.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMultiColumnHeadersExportComponent]
})
export class AppComponent {}