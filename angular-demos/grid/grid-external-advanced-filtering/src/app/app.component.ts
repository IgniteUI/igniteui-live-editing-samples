import { Component } from "@angular/core";
import { GridExternalAdvancedFilteringComponent } from "./grid/grid-external-advanced-filtering/grid-external-advanced-filtering.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridExternalAdvancedFilteringComponent]
})
export class AppComponent {}