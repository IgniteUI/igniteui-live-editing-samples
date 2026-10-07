import { Component } from "@angular/core";
import { BreadcrumbsDropdownComponent } from "./breadcrubms-dropdown/breadcrumbs-dropdown.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BreadcrumbsDropdownComponent]
})
export class AppComponent {}