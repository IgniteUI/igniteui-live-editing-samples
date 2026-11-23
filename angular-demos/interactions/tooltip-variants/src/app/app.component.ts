import { Component } from "@angular/core";
import { TooltipVariantsComponent } from "./tooltip-variants/tooltip-variants.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TooltipVariantsComponent]
})
export class AppComponent {}