import { Component } from "@angular/core";
import { RatingTailwindStylingComponent } from "./rating-tailwind-styling/rating-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RatingTailwindStylingComponent]
})
export class AppComponent {}