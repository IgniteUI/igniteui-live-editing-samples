import { Component } from "@angular/core";
import { BreadcrumbsPrefixSuffixComponent } from "./breadcrumbs-prefix-suffix/breadcrumbs-prefix-suffix.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BreadcrumbsPrefixSuffixComponent]
})
export class AppComponent {}