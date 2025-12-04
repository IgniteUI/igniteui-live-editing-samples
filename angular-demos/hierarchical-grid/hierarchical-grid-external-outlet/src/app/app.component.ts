import { Component } from "@angular/core";
import { HierarchicalGridExternalOutletComponent } from "./hierarchical-grid/hierarchical-grid-external-outlet/hierarchical-grid-external-outlet-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridExternalOutletComponent]
})
export class AppComponent {}