import { Component } from "@angular/core";
import { TooltipPlacementComponent } from "./tooltip-placement/tooltip-placement.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipPlacementComponent]
})
export class AppComponent {}