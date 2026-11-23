import { Component } from "@angular/core";
import { TooltipCustomComponent } from "./tooltip-custom/tooltip-custom.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipCustomComponent]
})
export class AppComponent {}