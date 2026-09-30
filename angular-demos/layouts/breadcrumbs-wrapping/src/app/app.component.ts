import { Component } from "@angular/core";
import { BreadcrumbsWrappingComponent } from "./breadcrumbs-wrapping/breadcrumbs-wrapping.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BreadcrumbsWrappingComponent]
})
export class AppComponent {}