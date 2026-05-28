import { Component } from "@angular/core";
import { ChipVariantsComponent } from "./chip/chip-variants/chip-variants.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipVariantsComponent]
})
export class AppComponent {}