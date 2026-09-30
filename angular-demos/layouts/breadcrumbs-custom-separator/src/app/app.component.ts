import { Component } from "@angular/core";
import { BreadcrumbsCustomSeparatorComponent } from "./breadcrumbs-custom-separator/breadcrumbs-custom-separator.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BreadcrumbsCustomSeparatorComponent]
})
export class AppComponent {}