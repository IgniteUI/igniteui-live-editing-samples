import { Component } from "@angular/core";
import { RatingInteractionStatesComponent } from "./rating-interaction-states/rating-interaction-states.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RatingInteractionStatesComponent]
})
export class AppComponent {}