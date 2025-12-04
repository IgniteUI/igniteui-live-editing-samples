import { Component } from "@angular/core";
import { CarouselAnimationsSampleComponent } from "./carousel-animations-sample/carousel-animations-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CarouselAnimationsSampleComponent]
})
export class AppComponent {}