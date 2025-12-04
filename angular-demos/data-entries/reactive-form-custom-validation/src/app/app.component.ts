import { Component } from "@angular/core";
import { ReactiveFormCustomValidationComponent } from "./input-group/reactive-form-custom-validation/reactive-form-custom-validation.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ReactiveFormCustomValidationComponent]
})
export class AppComponent {}