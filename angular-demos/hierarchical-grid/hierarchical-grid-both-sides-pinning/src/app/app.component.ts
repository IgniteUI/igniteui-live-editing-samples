import { Component } from "@angular/core";
import { HierarchicalGridBothSidePinningSampleComponent } from "./hierarchical-grid/hierarchical-grid-sample-both-sides-pinning/hierarchical-grid-both-sides-pinning.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridBothSidePinningSampleComponent]
})
export class AppComponent {}