import { Component } from "@angular/core";
import { NavbarStyleComponent } from "./navbar-style/navbar-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [NavbarStyleComponent]
})
export class AppComponent {}