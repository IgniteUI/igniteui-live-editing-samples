import { Component } from "@angular/core";
import { ChipSimpleComponent } from "./chip/chip-simple/chip-simple.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipSimpleComponent]
})
export class AppComponent {}