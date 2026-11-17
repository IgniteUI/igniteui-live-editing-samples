import { Component } from "@angular/core";
import { SimpleComboTailwindStylingComponent } from "./simple-combo-tailwind-styling/simple-combo-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboTailwindStylingComponent]
})
export class AppComponent {}