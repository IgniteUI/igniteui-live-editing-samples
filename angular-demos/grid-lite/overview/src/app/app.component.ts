import { Component } from "@angular/core";
import { GridLiteOverviewComponent } from "./grid-lite/grid-lite-overview/grid-lite-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteOverviewComponent]
})
export class AppComponent {}