import { Component } from "@angular/core";
import { RatingInFormComponent } from "./data-entries/rating/rating-form/rating-form.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RatingInFormComponent]
})
export class AppComponent {}