import { Component } from "@angular/core";
import { StepperStylingSampleComponent } from "./stepper-styling-sample/stepper-styling-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [StepperStylingSampleComponent]
})
export class AppComponent {}