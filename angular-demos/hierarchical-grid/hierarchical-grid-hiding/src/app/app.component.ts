import { Component } from "@angular/core";
import { HGridColumnHidingSampleComponent } from "./hierarchical-grid/hierarchical-grid-column-hiding/hierarchical-grid-hiding.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridColumnHidingSampleComponent]
})
export class AppComponent {}