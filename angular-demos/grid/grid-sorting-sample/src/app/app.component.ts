import { Component } from "@angular/core";
import { SortingSampleComponent } from "./grid/grid-sorting-sample/grid-sorting-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SortingSampleComponent]
})
export class AppComponent {}