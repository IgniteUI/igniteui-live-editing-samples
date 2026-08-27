import { Component } from "@angular/core";
import { ChipOutlinedComponent } from "./chip/chip-outlined/chip-outlined.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipOutlinedComponent]
})
export class AppComponent {}