import { Component } from "@angular/core";
import { RatingLayoutComponent } from "./rating-layout/rating-layout.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RatingLayoutComponent]
})
export class AppComponent {}