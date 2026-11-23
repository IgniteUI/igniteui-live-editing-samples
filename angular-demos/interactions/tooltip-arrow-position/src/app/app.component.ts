import { Component } from "@angular/core";
import { TooltipArrowPositionComponent } from "./tooltip-arrow-position/tooltip-arrow-position.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipArrowPositionComponent]
})
export class AppComponent {}