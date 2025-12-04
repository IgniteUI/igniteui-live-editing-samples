import { Component } from "@angular/core";
import { StepperLinearSampleComponent } from "./stepper-linear-sample/stepper-linear-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [StepperLinearSampleComponent]
})
export class AppComponent {}