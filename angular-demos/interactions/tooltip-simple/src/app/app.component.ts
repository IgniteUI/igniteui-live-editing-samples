import { Component } from "@angular/core";
import { TooltipSimpleComponent } from "./tooltip-simple/tooltip-simple.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipSimpleComponent]
})
export class AppComponent {}