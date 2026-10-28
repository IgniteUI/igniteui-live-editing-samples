import { Component } from "@angular/core";
import { CardTailwindStylingComponent } from "./card-tailwind-styling/card-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CardTailwindStylingComponent]
})
export class AppComponent {}