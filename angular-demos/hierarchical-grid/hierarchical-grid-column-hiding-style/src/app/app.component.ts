import { Component } from "@angular/core";
import { HierarchicalGridColumnHidingToolbarStyleComponent } from "./hierarchical-grid/hierarchical-grid-column-hiding-toolbar-style/hierarchical-grid-column-hiding-toolbar-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridColumnHidingToolbarStyleComponent]
})
export class AppComponent {}