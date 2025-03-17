import { Component } from "@angular/core";
import { HierarchicalGridRightPinningSampleComponent } from "./hierarchical-grid/hierarchical-grid-sample-right-pinning/hierarchical-grid-right-pinning.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridRightPinningSampleComponent]
})
export class AppComponent {}