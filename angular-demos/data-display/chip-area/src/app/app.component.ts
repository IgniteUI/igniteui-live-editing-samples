import { Component } from "@angular/core";
import { ChipAreaComponent } from "./chip/chip-area/chip-area.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipAreaComponent]
})
export class AppComponent {}