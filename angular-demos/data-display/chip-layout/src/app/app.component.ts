import { Component } from "@angular/core";
import { ChipLayoutComponent } from "./chip/chip-layout/chip-layout.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipLayoutComponent]
})
export class AppComponent {}