import { Component } from "@angular/core";
import { ComboValidationComponent } from "./combo-validation/combo-validation.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboValidationComponent]
})
export class AppComponent {}