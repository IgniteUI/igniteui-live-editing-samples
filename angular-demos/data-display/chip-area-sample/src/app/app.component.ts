import { Component } from "@angular/core";
import { ChipAreaSampleComponent } from "./chip/chip-area-sample/chip-area-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipAreaSampleComponent]
})
export class AppComponent {}