import { Component } from "@angular/core";
import { ColorPickerStatesComponent } from "./states/color-picker-states.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ColorPickerStatesComponent]
})
export class AppComponent {}