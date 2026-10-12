import { Component } from "@angular/core";
import { BreadcrumbsTailwindStylingComponent } from "./breadcrumbs-tailwind-styling/breadcrumbs-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BreadcrumbsTailwindStylingComponent]
})
export class AppComponent {}