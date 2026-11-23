import { Component } from "@angular/core";
import { TooltipTailwindStylingComponent } from "./tooltip-tailwind-styling/tooltip-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipTailwindStylingComponent]
})
export class AppComponent {}