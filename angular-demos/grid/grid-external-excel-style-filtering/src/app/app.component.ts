import { Component } from "@angular/core";
import { GridExternalExcelStyleFilteringComponent } from "./grid/grid-external-excel-style-filtering/grid-external-excel-style-filtering.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridExternalExcelStyleFilteringComponent]
})
export class AppComponent {}