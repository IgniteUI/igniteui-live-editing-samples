import { Component } from "@angular/core";
import { GridLiteDataBindingDynamicComponent } from "./grid-lite/grid-lite-data-binding-dynamic/grid-lite-data-binding-dynamic.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteDataBindingDynamicComponent]
})
export class AppComponent {}