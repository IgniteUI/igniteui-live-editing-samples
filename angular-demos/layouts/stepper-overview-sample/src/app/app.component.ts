import { Component } from "@angular/core";
import { StepperOverviewSampleComponent } from "./stepper-overview-sample/stepper-overview-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [StepperOverviewSampleComponent]
})
export class AppComponent {}