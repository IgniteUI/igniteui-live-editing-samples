import { Component } from "@angular/core";
import { TooltipStylingComponent } from "./tooltip-styling/tooltip-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipStylingComponent]
})
export class AppComponent {}