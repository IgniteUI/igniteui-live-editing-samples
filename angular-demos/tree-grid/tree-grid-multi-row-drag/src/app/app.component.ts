import { Component } from "@angular/core";
import { TreeGridMultiRowDragComponent } from "./tree-grid-multi-row-drag/tree-grid-multi-row-drag.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridMultiRowDragComponent]
})
export class AppComponent {}