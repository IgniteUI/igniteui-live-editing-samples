import { Component } from "@angular/core";
import { ReactiveFormValidationComponent } from "./input-group/reactive-form-validation/reactive-form-validation.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ReactiveFormValidationComponent]
})
export class AppComponent {}