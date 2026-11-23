import { Component } from "@angular/core";
import { TooltipPositionComponent } from "./tooltip-position/tooltip-position.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipPositionComponent]
})
export class AppComponent {}