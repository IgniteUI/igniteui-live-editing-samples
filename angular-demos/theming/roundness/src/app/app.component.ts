import { Component } from "@angular/core";
import { RoundnessComponent } from "./roundness-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RoundnessComponent]
})
export class AppComponent {}