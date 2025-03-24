import { Component } from "@angular/core";
import { HGridCollapsibleColumnGroupComponent } from "./hierarchical-grid/hierarchical-grid-collapsible-column-groups/hierarchical-grid-collapsible-column-groups.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridCollapsibleColumnGroupComponent]
})
export class AppComponent {}