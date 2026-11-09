import { Component } from "@angular/core";
import { TabsTailwindStylingComponent } from "./tabs-tailwind-styling/tabs-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsTailwindStylingComponent]
})
export class AppComponent {}