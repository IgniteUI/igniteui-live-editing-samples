import { Component } from "@angular/core";
import { GridSearchSampleComponent } from "./grid/grid-search-sample/grid-search-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridSearchSampleComponent]
})
export class AppComponent {}