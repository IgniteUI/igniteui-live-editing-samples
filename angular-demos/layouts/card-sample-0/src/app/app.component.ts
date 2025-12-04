import { Component } from "@angular/core";
import { CardComponent } from "./card.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CardComponent]
})
export class AppComponent {}