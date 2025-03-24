import { Component } from "@angular/core";
import { ExcelStyleFilteringStyleComponent } from "./grid/grid-excel-style-filtering-style/grid-excel-style-filtering-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ExcelStyleFilteringStyleComponent]
})
export class AppComponent {}