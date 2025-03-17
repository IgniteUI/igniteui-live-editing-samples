import { Component } from "@angular/core";
import { HierarchicalGridValidatorServiceCrossCellComponent } from "./hierarchical-grid/hierarchical-grid-cross-field-validation/hierarchical-grid-cross-field-validation.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridValidatorServiceCrossCellComponent]
})
export class AppComponent {}