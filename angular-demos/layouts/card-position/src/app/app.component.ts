import { Component } from "@angular/core";
import { CardPositionComponent } from "./card-position/card-position.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CardPositionComponent]
})
export class AppComponent {}