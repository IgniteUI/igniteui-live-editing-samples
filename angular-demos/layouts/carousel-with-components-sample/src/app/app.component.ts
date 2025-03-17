import { Component } from "@angular/core";
import { CarouselWithComponentsSampleComponent } from "./carousel-with-components-sample/carousel-with-components-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CarouselWithComponentsSampleComponent]
})
export class AppComponent {}