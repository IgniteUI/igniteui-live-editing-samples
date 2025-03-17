import { Component } from "@angular/core";
import { StepperStepTypesSampleComponent } from "./stepper-steptypes-sample/stepper-steptypes-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [StepperStepTypesSampleComponent]
})
export class AppComponent {}