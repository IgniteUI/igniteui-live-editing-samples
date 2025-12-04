import { Component } from "@angular/core";
import { TooltipRichComponent } from "./tooltip-rich/tooltip-rich.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipRichComponent]
})
export class AppComponent {}