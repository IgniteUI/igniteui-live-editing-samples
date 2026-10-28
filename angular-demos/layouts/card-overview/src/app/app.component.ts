import { Component } from "@angular/core";
import { CardOverviewComponent } from "./card-overview/card-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CardOverviewComponent]
})
export class AppComponent {}