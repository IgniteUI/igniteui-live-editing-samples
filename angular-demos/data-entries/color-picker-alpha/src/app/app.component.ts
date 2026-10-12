import { Component } from "@angular/core";
import { ColorPickerAlphaComponent } from "./alpha/color-picker-alpha.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ColorPickerAlphaComponent]
})
export class AppComponent {}