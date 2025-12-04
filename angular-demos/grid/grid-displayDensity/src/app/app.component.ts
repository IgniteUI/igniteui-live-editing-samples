import { Component } from "@angular/core";
import { GridDisplayDensitySampleComponent } from "./grid/grid-displaydensity-sample/grid-displaydensity-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridDisplayDensitySampleComponent]
})
export class AppComponent {}