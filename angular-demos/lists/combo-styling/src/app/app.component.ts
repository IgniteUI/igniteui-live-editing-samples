import { Component } from "@angular/core";
import { ComboStylingComponent } from "./combo-styling/combo-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboStylingComponent]
})
export class AppComponent {}