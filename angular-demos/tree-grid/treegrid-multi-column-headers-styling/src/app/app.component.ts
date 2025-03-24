import { Component } from "@angular/core";
import { TreeGridMultiColumnHeadersStylingComponent } from "./tree-grid-multi-column-headers-styling/tree-grid-multi-column-headers-styling.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridMultiColumnHeadersStylingComponent]
})
export class AppComponent {}