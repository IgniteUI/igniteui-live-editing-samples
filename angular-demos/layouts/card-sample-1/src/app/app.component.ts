import { Component } from "@angular/core";
import { CardSample1Component } from "./card-sample-1/card-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CardSample1Component]
})
export class AppComponent {}