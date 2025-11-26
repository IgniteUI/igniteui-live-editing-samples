import { Component } from "@angular/core";
import { GridComponent } from "./grid/grid-boston-marathon/grid.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridComponent]
})
export class AppComponent {}