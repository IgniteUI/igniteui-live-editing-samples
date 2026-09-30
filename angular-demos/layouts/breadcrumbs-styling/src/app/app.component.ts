import { Component } from "@angular/core";
import { BreadcrumbsStylingComponent } from "./breadcrumbs-styling/breadcrumbs-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BreadcrumbsStylingComponent]
})
export class AppComponent {}