import { Component } from "@angular/core";
import { HierarchicalGridFilteringStyleComponent } from "./hierarchical-grid/hierarchical-grid-filtering-style/hierarchical-grid-filtering-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridFilteringStyleComponent]
})
export class AppComponent {}