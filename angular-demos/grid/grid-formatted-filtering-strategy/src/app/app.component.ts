import { Component } from "@angular/core";
import { GridFormattedFilteringStrategyComponent } from "./grid/grid-formatted-filtering-strategy/grid-formatted-filtering-strategy.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridFormattedFilteringStrategyComponent]
})
export class AppComponent {}