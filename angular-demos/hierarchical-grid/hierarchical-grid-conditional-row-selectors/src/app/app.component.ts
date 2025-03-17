import { Component } from "@angular/core";
import { HGridConditionalRowSelectorsComponent } from "./hierarchical-grid/hierarchical-grid-conditional-row-selectors/hierarchical-grid-conditional-row-selectors.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridConditionalRowSelectorsComponent]
})
export class AppComponent {}