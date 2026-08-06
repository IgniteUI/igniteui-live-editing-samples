import { Component } from "@angular/core";
import { BadgeStylingComponent } from "./badge-styling/badge-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeStylingComponent]
})
export class AppComponent {}