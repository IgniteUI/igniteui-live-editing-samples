import { Component } from "@angular/core";
import { RatingSizeComponent } from "./rating-size/rating-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RatingSizeComponent]
})
export class AppComponent {}