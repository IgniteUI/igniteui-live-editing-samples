import { Component } from "@angular/core";
import { TooltipOverviewComponent } from "./tooltip-overview/tooltip-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipOverviewComponent]
})
export class AppComponent {}