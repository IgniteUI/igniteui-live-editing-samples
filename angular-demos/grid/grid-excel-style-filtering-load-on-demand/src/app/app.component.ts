import { Component } from "@angular/core";
import { GridExcelStyleFilteringLoadOnDemandComponent } from "./grid/grid-excel-style-filtering-load-on-demand/grid-excel-style-filtering-load-on-demand.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridExcelStyleFilteringLoadOnDemandComponent]
})
export class AppComponent {}