import { Component } from "@angular/core";
import { GridAdvancedFilteringStyleComponent } from "./grid/grid-advanced-filtering-style/grid-advanced-filtering-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridAdvancedFilteringStyleComponent]
})
export class AppComponent {}