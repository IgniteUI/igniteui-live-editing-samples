import { Component } from "@angular/core";
import { CardMediaComponent } from "./card-media/card-media.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CardMediaComponent]
})
export class AppComponent {}