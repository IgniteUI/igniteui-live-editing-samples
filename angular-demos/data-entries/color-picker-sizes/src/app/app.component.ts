import { Component } from "@angular/core";
import { ColorPickerSizesComponent } from "./sizes/color-picker-sizes.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ColorPickerSizesComponent]
})
export class AppComponent {}