import { Component } from "@angular/core";
import { TreeGridColumnHidingToolbarStyleComponent } from "./tree-grid-column-hiding-toolbar-style/tree-grid-column-hiding-toolbar-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridColumnHidingToolbarStyleComponent]
})
export class AppComponent {}