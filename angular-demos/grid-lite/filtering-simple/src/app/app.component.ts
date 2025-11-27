import { Component } from "@angular/core";
import { GridLiteFilteringSimpleComponent } from "./grid-lite/grid-lite-filtering-simple/grid-lite-filtering-simple.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteFilteringSimpleComponent]
})
export class AppComponent {}