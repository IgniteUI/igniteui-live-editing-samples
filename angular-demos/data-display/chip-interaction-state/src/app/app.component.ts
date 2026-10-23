import { Component } from "@angular/core";
import { ChipInteractionStateComponent } from "./chip/chip-interaction-state/chip-interaction-state.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipInteractionStateComponent]
})
export class AppComponent {}