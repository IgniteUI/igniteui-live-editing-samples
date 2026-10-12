import { Component } from "@angular/core";
import { ColorPickerStylingComponent } from "./styling/color-picker-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ColorPickerStylingComponent]
})
export class AppComponent {}