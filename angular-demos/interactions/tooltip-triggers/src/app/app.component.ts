import { Component } from "@angular/core";
import { TooltipTriggersComponent } from "./tooltip-triggers/tooltip-triggers.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipTriggersComponent]
})
export class AppComponent {}