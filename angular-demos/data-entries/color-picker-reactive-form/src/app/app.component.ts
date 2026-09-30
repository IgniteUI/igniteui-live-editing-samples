import { Component } from "@angular/core";
import { ColorPickerReactiveFormComponent } from "./reactive-form/color-picker-reactive-form.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ColorPickerReactiveFormComponent]
})
export class AppComponent {}