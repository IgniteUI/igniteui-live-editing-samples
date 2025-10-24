import { Component } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [NavbarComponent]
})
export class AppComponent {}