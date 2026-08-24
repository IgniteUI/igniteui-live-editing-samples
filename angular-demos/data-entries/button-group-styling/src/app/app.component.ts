import { Component } from "@angular/core";
import { ButtonGroupStylingComponent } from "./button-group-styling/button-group-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupStylingComponent]
})
export class AppComponent {}