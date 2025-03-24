import { Component } from "@angular/core";
import { NavbarCustomTitleComponent } from "./navbar-custom-title/navbar-custom-title.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [NavbarCustomTitleComponent]
})
export class AppComponent {}