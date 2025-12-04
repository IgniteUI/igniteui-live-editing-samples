import { Component } from "@angular/core";
import { StepperSampleReactiveFormsComponent } from "./stepper-sample-reactive-forms/stepper-sample-reactive-forms.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [StepperSampleReactiveFormsComponent]
})
export class AppComponent {}