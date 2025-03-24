import { Component } from "@angular/core";
import { HGridPinningSampleComponent } from "./hierarchical-grid/hierarchical-grid-column-pinning/hierarchical-grid-pinning.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridPinningSampleComponent]
})
export class AppComponent {}