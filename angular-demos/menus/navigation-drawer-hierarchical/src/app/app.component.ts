import { Component } from "@angular/core";
import { NavDrawerHierarchicalComponent } from "./nav-drawer-hierarchical/nav-drawer-hierarchical.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [NavDrawerHierarchicalComponent]
})
export class AppComponent {}