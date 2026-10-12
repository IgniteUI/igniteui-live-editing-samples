import { Component } from "@angular/core";
import { ButtonInteractionStatesComponent } from "./button-interaction-states/button-interaction-states.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonInteractionStatesComponent]
})
export class AppComponent {}