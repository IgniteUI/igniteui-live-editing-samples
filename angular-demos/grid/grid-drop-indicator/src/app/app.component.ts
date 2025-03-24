import { Component } from "@angular/core";
import { GridDropIndicatorComponent } from "./grid/grid-drop-indicator/grid-drop-indicator";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridDropIndicatorComponent]
})
export class AppComponent {}