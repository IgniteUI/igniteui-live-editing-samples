import { Component } from "@angular/core";
import { GridGroupByStylingComponent } from "./grid/grid-groupby-styling/grid-groupby-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridGroupByStylingComponent]
})
export class AppComponent {}