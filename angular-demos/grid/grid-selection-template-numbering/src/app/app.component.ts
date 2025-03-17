import { Component } from "@angular/core";
import { GridSelectionTemplateNumbersComponent } from "./grid/grid-sample-selection-template-numbers/grid-sample-selection-template-numbers.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridSelectionTemplateNumbersComponent]
})
export class AppComponent {}