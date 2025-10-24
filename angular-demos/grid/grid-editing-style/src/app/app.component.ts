import { Component } from "@angular/core";
import { GridEditingStyleSampleComponent } from "./grid/grid-editing-style-sample/grid-editing-style-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridEditingStyleSampleComponent]
})
export class AppComponent {}