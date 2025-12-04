import { Component } from "@angular/core";
import { GridSample3Component } from "./grid/grid-sample-3/grid-sample-3.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridSample3Component]
})
export class AppComponent {}