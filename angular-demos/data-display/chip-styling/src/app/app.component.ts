import { Component } from "@angular/core";
import { ChipStylingSampleComponent } from "./chip/chip-styling/chip-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipStylingSampleComponent]
})
export class AppComponent {}