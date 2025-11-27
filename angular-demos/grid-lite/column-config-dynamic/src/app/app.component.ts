import { Component } from "@angular/core";
import { GridLiteColumnConfigDynamicComponent } from "./grid-lite/grid-lite-column-config-dynamic/grid-lite-column-config-dynamic.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteColumnConfigDynamicComponent]
})
export class AppComponent {}