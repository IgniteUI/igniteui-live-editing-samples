import { Component } from "@angular/core";
import { RatingStatesComponent } from "./rating-states/rating-states.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RatingStatesComponent]
})
export class AppComponent {}