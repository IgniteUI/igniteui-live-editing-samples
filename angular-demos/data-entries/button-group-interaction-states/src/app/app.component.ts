import { Component } from "@angular/core";
import { ButtonGroupInteractionStatesComponent } from "./button-group-interaction-states/button-group-interaction-states.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupInteractionStatesComponent]
})
export class AppComponent {}