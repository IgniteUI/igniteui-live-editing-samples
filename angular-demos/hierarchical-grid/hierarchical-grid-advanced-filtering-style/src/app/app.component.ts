import { Component } from "@angular/core";
import { HGridAdvancedFilteringStyleComponent } from "./hierarchical-grid/hierarchical-grid-advanced-filtering-style/hierarchical-grid-advanced-filtering-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridAdvancedFilteringStyleComponent]
})
export class AppComponent {}