import { Component } from "@angular/core";
import { ColorPickerTailwindStylingComponent } from "./tailwind-styling/color-picker-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ColorPickerTailwindStylingComponent]
})
export class AppComponent {}