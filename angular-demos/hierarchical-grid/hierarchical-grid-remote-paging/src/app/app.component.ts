import { Component } from "@angular/core";
import { HGridRemotePagingSampleComponent } from "./hierarchical-grid/hierarchical-grid-paging/hierarchical-grid-remote-paging.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridRemotePagingSampleComponent]
})
export class AppComponent {}