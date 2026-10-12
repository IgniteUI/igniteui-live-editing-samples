import { Component } from "@angular/core";
import { ColorPickerSwatchesComponent } from "./swatches/color-picker-swatches.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ColorPickerSwatchesComponent]
})
export class AppComponent {}