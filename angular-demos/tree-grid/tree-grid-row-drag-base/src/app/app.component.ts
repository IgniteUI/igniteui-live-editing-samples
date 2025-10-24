import { Component } from "@angular/core";
import { TreeGridRowDragBaseComponent } from "./tree-grid-row-drag-base/tree-grid-row-drag-base.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridRowDragBaseComponent]
})
export class AppComponent {}