import { Component } from "@angular/core";
import { CardSample2Component } from "./card-sample-2/card-sample-2.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CardSample2Component]
})
export class AppComponent {}