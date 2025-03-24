import { Component } from "@angular/core";
import { CarouselNoNavigationSampleComponent } from "./carousel-no-navigation-sample/carousel-no-navigation-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CarouselNoNavigationSampleComponent]
})
export class AppComponent {}