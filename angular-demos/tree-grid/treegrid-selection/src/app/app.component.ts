import { Component } from "@angular/core";
import { TreeGridSelectionSampleComponent } from "./tree-grid-selection-sample/tree-grid-selection-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridSelectionSampleComponent]
})
export class AppComponent {}