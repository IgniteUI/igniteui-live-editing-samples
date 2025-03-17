import { Component } from "@angular/core";
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CarouselComponent]
})
export class AppComponent {}