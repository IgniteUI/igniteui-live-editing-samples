import { Component } from "@angular/core";
import { GridWithRatingComponent } from "./grid/grid-with-rating/grid-with-rating.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridWithRatingComponent]
})
export class AppComponent {}