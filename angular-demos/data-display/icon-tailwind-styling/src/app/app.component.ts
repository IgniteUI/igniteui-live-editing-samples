import { Component } from "@angular/core";
import { IconTailwindStylingComponent } from "./icon-tailwind-styling/icon-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [IconTailwindStylingComponent]
})
export class AppComponent {}