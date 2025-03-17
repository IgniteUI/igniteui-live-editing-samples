import { Component } from "@angular/core";
import { HierarchicalGridToolbarStyleComponent } from "./hierarchical-grid/hierarchical-grid-toolbar-style/hierarchical-grid-toolbar-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridToolbarStyleComponent]
})
export class AppComponent {}