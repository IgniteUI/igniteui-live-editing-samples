import { Component } from "@angular/core";
import { HGridSortingSampleComponent } from "./hierarchical-grid/hierarchical-grid-sorting/hierarchical-grid-sorting.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridSortingSampleComponent]
})
export class AppComponent {}