import { Component } from "@angular/core";
import { SliderTimeframeComponent } from "./slider-timeframe/slider-timeframe.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SliderTimeframeComponent]
})
export class AppComponent {}