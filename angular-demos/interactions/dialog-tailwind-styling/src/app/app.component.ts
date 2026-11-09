import { Component } from "@angular/core";
import { DialogTailwindStylingComponent } from "./dialog-tailwind-styling/dialog-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DialogTailwindStylingComponent]
})
export class AppComponent {}