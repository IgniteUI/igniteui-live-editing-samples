import { Component } from "@angular/core";
import { CardStylingComponent } from "./card-styling/card-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CardStylingComponent]
})
export class AppComponent {}