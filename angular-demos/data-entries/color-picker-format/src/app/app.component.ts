import { Component } from "@angular/core";
import { ColorPickerFormatComponent } from "./format/color-picker-format.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ColorPickerFormatComponent]
})
export class AppComponent {}