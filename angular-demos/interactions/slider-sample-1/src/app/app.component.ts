import { Component } from "@angular/core";
import { SliderSample1Component } from "./slider-sample-1/slider-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SliderSample1Component]
})
export class AppComponent {}