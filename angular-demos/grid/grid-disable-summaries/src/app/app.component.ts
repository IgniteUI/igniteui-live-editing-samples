import { Component } from "@angular/core";
import { GridDisableSummariesComponent } from "./grid/grid-disable-summaries/grid-disable-summaries.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridDisableSummariesComponent]
})
export class AppComponent {}