import { Component } from "@angular/core";
import { TreeGridRowStylesComponent } from "./tree-grid-rowStyles-sample/tree-grid-rowStyle.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridRowStylesComponent]
})
export class AppComponent {}