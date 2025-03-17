import { Component } from "@angular/core";
import { GridMultiRowLayoutComponent } from "./grid/grid-multi-row-layout/grid-multi-row-layout.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMultiRowLayoutComponent]
})
export class AppComponent {}