import { Component } from "@angular/core";
import { BreadcrumbsStatesComponent } from "./breadcrumbs-states/breadcrumbs-states.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BreadcrumbsStatesComponent]
})
export class AppComponent {}