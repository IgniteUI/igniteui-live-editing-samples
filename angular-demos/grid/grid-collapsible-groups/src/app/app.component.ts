import { Component } from "@angular/core";
import { GridCollapsibleColumnGroupsComponent } from "./grid/grid-collapsible-columnGroups/grid-collapsible-column-groups.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridCollapsibleColumnGroupsComponent]
})
export class AppComponent {}