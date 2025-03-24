import { Component } from "@angular/core";
import { GridNestedDataBindComponent } from "./grid/grid-nested-data-binding/grid-nested-data-bind";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridNestedDataBindComponent]
})
export class AppComponent {}