import { Component } from "@angular/core";
import { SliderSecondaryTicksMirrorComponent } from "./slider-secondary-ticks-mirror/slider-secondary-ticks-mirror.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SliderSecondaryTicksMirrorComponent]
})
export class AppComponent {}