import { Component } from "@angular/core";
import { ColorPickerInputSizesComponent } from "./input-sizes/color-picker-input-sizes.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ColorPickerInputSizesComponent]
})
export class AppComponent {}