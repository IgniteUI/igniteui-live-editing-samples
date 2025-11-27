import { Component } from "@angular/core";
import { GridLiteColumnConfigSimpleComponent } from "./grid-lite/grid-lite-column-config-simple/grid-lite-column-config-simple.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteColumnConfigSimpleComponent]
})
export class AppComponent {}