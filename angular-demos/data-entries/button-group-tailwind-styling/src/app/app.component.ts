import { Component } from "@angular/core";
import { ButtonGroupTailwindStylingComponent } from "./button-group-tailwind-styling/button-group-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupTailwindStylingComponent]
})
export class AppComponent {}