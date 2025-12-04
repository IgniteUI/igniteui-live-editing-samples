import { Component } from "@angular/core";
import { SliderSample2Component } from "./slider-sample-2/slider-sample-2.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SliderSample2Component]
})
export class AppComponent {}