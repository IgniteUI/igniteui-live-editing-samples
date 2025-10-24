import { Component } from "@angular/core";
import { GridCompositeDataComponent } from "./grid/grid-composite-data-binding/grid-composite-data.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridCompositeDataComponent]
})
export class AppComponent {}