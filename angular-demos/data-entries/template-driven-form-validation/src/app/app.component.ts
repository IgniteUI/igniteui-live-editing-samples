import { Component } from "@angular/core";
import { TemplateDrivenFormValidationComponent } from "./input-group/template-driven-form-validation/template-driven-form-validation.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TemplateDrivenFormValidationComponent]
})
export class AppComponent {}