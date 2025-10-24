import { Component } from "@angular/core";
import { HGridFormattedFilteringStrategyComponent } from "./hierarchical-grid/hierarchical-grid-formatted-filtering-strategy/hierarchical-grid-formatted-filtering-strategy.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridFormattedFilteringStrategyComponent]
})
export class AppComponent {}