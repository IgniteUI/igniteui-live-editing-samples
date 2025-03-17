import { Component } from "@angular/core";
import { NavDrawerMiniComponent } from "./nav-drawer-mini/nav-drawer-mini.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [NavDrawerMiniComponent]
})
export class AppComponent {}