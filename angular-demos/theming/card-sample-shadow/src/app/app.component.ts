import { Component } from "@angular/core";
import { CardSampleShadowComponent } from "./card-sample-shadow/card-sample-shadow";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CardSampleShadowComponent]
})
export class AppComponent {}