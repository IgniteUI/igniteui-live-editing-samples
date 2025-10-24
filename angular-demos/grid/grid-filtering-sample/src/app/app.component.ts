import { Component } from "@angular/core";
import { FilteringSampleComponent } from "./grid/grid-filtering-sample/grid-filtering-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [FilteringSampleComponent]
})
export class AppComponent {}