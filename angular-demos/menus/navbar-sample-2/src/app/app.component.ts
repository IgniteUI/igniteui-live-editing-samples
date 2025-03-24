import { Component } from "@angular/core";
import { NavbarSample2Component } from "./navbar-sample-2/navbar-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [NavbarSample2Component]
})
export class AppComponent {}