import { Component } from "@angular/core";
import { HierarchicalGridPagerSampleComponent } from "./hierarchical-grid/hierarchical-grid-pager-sample/hierarchical-grid-pager-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridPagerSampleComponent]
})
export class AppComponent {}