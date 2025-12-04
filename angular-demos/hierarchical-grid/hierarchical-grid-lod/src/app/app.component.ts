import { Component } from "@angular/core";
import { HierarchicalGridLoDSampleComponent } from "./hierarchical-grid/hierarchical-grid-lod/hierarchical-grid-lod.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridLoDSampleComponent]
})
export class AppComponent {}