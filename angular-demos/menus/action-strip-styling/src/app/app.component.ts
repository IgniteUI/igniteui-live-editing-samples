import { Component } from "@angular/core";
import { ActionStripStylingComponent } from "./action-strip-paragraph-styling/action-strip-paragraph-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ActionStripStylingComponent]
})
export class AppComponent {}