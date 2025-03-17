import { Component } from "@angular/core";
import { TreeGridAdvancedFilteringStyleComponent } from "./tree-grid/tree-grid-advanced-filtering-style/tree-grid-advanced-filtering-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridAdvancedFilteringStyleComponent]
})
export class AppComponent {}