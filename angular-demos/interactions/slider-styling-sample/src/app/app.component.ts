import { Component } from "@angular/core";
import { AppSliderStylingComponent } from "./slider-styling-sample/app-slider-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AppSliderStylingComponent]
})
export class AppComponent {}