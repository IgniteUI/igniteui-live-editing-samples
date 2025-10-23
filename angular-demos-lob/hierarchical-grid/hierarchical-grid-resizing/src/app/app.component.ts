import { Component } from "@angular/core";
import { HGridColumnResizingSampleComponent } from "./hierarchical-grid/hierarchical-grid-column-resizing/hierarchical-grid-resizing.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridColumnResizingSampleComponent]
})
export class AppComponent {}