import { Component } from "@angular/core";
import { TreeGridToolbarStyleComponent } from "./tree-grid-toolbar-style/tree-grid-toolbar-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridToolbarStyleComponent]
})
export class AppComponent {}