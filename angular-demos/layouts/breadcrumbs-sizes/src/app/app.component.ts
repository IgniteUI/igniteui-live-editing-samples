import { Component } from "@angular/core";
import { BreadcrumbsSizesComponent } from "./breadcrumbs-sizes/breadcrumbs-sizes.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BreadcrumbsSizesComponent]
})
export class AppComponent {}