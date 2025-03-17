import { Component } from "@angular/core";
import { CheckboxStylingComponent } from "./checkbox-styling/checkbox-styling.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CheckboxStylingComponent]
})
export class AppComponent {}