import { Component } from "@angular/core";
import { ButtonStylingComponent } from "./button-styling/button-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonStylingComponent]
})
export class AppComponent {}