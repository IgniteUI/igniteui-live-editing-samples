import { Component } from "@angular/core";
import { CardActionsComponent } from "./card-actions/card-actions.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CardActionsComponent]
})
export class AppComponent {}