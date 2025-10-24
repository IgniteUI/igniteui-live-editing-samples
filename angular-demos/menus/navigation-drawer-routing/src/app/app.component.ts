import { Component } from "@angular/core";
import { NavDrawerRoutingComponent } from "./nav-drawer-routing/nav-drawer-routing.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [NavDrawerRoutingComponent]
})
export class AppComponent {}