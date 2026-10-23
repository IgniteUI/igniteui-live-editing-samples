import { Component } from "@angular/core";
import { RatingStylingComponent } from "./rating-styling/rating-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RatingStylingComponent]
})
export class AppComponent {}