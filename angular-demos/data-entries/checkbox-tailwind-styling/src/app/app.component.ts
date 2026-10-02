import { Component } from "@angular/core";
import { CheckboxTailwindStylingComponent } from "./checkbox-tailwind-styling/checkbox-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CheckboxTailwindStylingComponent]
})
export class AppComponent {}