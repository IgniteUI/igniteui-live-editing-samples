import { Component } from "@angular/core";
import { TooltipAdvancedComponent } from "./tooltip-advanced/tooltip-advanced.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipAdvancedComponent]
})
export class AppComponent {}