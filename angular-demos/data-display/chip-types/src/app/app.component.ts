import { Component } from "@angular/core";
import { ChipTypesComponent } from "./chip/chip-types/chip-types.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipTypesComponent]
})
export class AppComponent {}