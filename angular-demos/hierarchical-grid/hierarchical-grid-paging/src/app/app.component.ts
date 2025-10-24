import { Component } from "@angular/core";
import { HGridPagingSampleComponent } from "./hierarchical-grid/hierarchical-grid-paging/hierarchical-grid-paging.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridPagingSampleComponent]
})
export class AppComponent {}