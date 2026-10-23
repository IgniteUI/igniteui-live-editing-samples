import { Component } from "@angular/core";
import { RatingOverviewComponent } from "./rating-overview/rating-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RatingOverviewComponent]
})
export class AppComponent {}