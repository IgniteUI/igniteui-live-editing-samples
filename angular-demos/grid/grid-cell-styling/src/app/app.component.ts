import { Component } from "@angular/core";
import { GridConditionalCellStyleComponent } from "./grid/grid-conditional-cell-style/grid-conditional-cell-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridConditionalCellStyleComponent]
})
export class AppComponent {}