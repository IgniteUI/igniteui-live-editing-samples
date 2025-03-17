import { Component } from "@angular/core";
import { CardStylingSampleComponent } from "./card-styling-sample/card-styling-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CardStylingSampleComponent]
})
export class AppComponent {}