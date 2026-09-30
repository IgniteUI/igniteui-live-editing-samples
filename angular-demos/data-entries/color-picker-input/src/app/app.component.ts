import { Component } from "@angular/core";
import { ColorPickerInputComponent } from "./input/color-picker-input.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ColorPickerInputComponent]
})
export class AppComponent {}