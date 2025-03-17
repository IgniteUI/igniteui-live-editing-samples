import { Component } from "@angular/core";
import { TooltipStyleComponent } from "./tooltip-style/tooltip-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipStyleComponent]
})
export class AppComponent {}