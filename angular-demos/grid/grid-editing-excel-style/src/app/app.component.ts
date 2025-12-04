import { Component } from "@angular/core";
import { GridExcelStyleEditingComponent } from "./grid/grid-editing-excel-style/grid-editing-excel-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridExcelStyleEditingComponent]
})
export class AppComponent {}