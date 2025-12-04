import { Component } from "@angular/core";
import { ButtonsRoundnessComponent } from "./buttons-roundness-sample/buttons-roundness-sample";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonsRoundnessComponent]
})
export class AppComponent {}