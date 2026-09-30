import { Component } from "@angular/core";
import { BreadcrumbsOverviewComponent } from "./breadcrumbs-overview/breadcrumbs-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BreadcrumbsOverviewComponent]
})
export class AppComponent {}