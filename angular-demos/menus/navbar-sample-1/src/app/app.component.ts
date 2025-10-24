import { Component } from "@angular/core";
import { NavbarSample1Component } from "./navbar-sample-1/navbar-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [NavbarSample1Component]
})
export class AppComponent {}