import { Component } from "@angular/core";
import { BadgeOverviewComponent } from "./badge-overview/badge-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeOverviewComponent]
})
export class AppComponent {}