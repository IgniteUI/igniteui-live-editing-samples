import { Component } from "@angular/core";
import { NavDrawerSimpleComponent } from "./nav-drawer-simple/nav-drawer-simple.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [NavDrawerSimpleComponent]
})
export class AppComponent {}