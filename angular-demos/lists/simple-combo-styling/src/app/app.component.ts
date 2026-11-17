import { Component } from "@angular/core";
import { SimpleComboStylingComponent } from "./simple-combo-styling/simple-combo-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboStylingComponent]
})
export class AppComponent {}