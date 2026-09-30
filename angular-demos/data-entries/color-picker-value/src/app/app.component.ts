import { Component } from "@angular/core";
import { ColorPickerValueComponent } from "./value/color-picker-value.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ColorPickerValueComponent]
})
export class AppComponent {}