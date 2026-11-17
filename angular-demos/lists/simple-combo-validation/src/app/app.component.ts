import { Component } from "@angular/core";
import { SimpleComboValidationComponent } from "./simple-combo-validation/simple-combo-validation.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboValidationComponent]
})
export class AppComponent {}