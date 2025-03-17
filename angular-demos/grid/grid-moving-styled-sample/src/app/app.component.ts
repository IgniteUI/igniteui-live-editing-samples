import { Component } from "@angular/core";
import { GridMovingStyledSampleComponent } from "./grid/grid-moving-styled-sample/grid-moving-styled-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMovingStyledSampleComponent]
})
export class AppComponent {}