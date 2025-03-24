import { Component } from "@angular/core";
import { MovieComponent } from "./data-entries/autocomplete/movie/movie.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [MovieComponent]
})
export class AppComponent {}