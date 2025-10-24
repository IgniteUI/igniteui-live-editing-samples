import { Component } from "@angular/core";
import { NavDrawerStylingComponent } from "./nav-drawer-styling/nav-drawer-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [NavDrawerStylingComponent]
})
export class AppComponent {}