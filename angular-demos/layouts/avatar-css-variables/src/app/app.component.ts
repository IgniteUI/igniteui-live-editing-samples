import { Component } from "@angular/core";
import { AvatarCSSVariablesComponent } from "./avatar-css-variables/avatar-css-variables.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AvatarCSSVariablesComponent]
})
export class AppComponent {}