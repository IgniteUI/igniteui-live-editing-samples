import { Component } from "@angular/core";
import { TreeGridColumnGroupSelectionComponent } from "./tree-grid/column-group-selection/column-group-selection.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridColumnGroupSelectionComponent]
})
export class AppComponent {}