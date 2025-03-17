import { Component } from "@angular/core";
import { IconButtonStylingComponent } from "./icon-button-styling/icon-button-styling.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [IconButtonStylingComponent]
})
export class AppComponent {}