import { Component } from "@angular/core";
import { SVGIconButtonComponent } from "./svg-icon-button/svg-icon-button.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SVGIconButtonComponent]
})
export class AppComponent {}