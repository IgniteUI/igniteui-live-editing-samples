import { Component } from "@angular/core";
import { TreeGridRowDragComponent } from "./tree-grid-row-drag/tree-grid-row-drag.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridRowDragComponent]
})
export class AppComponent {}