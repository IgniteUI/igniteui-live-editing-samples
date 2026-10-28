import { Component } from "@angular/core";
import { IconOverviewComponent } from "./icon-overview/icon-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [IconOverviewComponent]
})
export class AppComponent {}