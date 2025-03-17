import { Component } from "@angular/core";
import { SwitchStylingComponent } from "./switch-styling/switch-styling.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SwitchStylingComponent]
})
export class AppComponent {}