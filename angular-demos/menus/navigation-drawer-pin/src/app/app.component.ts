import { Component } from "@angular/core";
import { NavDrawerPinComponent } from "./nav-drawer-pin/nav-drawer-pin.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [NavDrawerPinComponent]
})
export class AppComponent {}