import { Component } from "@angular/core";
import { ButtonTailwindStylingComponent } from "./button-tailwind-styling/button-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonTailwindStylingComponent]
})
export class AppComponent {}