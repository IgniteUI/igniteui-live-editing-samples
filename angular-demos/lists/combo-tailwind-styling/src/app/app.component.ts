import { Component } from "@angular/core";
import { ComboTailwindStylingComponent } from "./combo-tailwind-styling/combo-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboTailwindStylingComponent]
})
export class AppComponent {}