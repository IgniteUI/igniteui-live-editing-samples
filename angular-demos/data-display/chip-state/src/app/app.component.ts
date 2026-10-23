import { Component } from "@angular/core";
import { ChipStateComponent } from "./chip/chip-state/chip-state.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipStateComponent]
})
export class AppComponent {}