import { Component } from "@angular/core";
import { CardSample3Component } from "./card-sample-3/card-sample-3.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CardSample3Component]
})
export class AppComponent {}