import { Component } from "@angular/core";
import { GridFilteringStyleComponent } from "./grid/grid-filtering-style/grid-filtering-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridFilteringStyleComponent]
})
export class AppComponent {}