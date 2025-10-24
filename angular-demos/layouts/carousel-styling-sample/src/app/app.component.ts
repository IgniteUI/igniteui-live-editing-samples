import { Component } from "@angular/core";
import { CarouselStylingSampleComponent } from "./carousel-styling-sample/carousel-styling-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CarouselStylingSampleComponent]
})
export class AppComponent {}