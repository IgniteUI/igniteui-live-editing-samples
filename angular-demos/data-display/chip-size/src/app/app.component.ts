import { Component } from "@angular/core";
import { ChipSizeComponent } from "./chip/chip-size/chip-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipSizeComponent]
})
export class AppComponent {}