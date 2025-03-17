import { Component } from "@angular/core";
import { HierarchicalGridValidatorServiceExtendedComponent } from "./hierarchical-grid/hierarchical-grid-validator-service-extended/hierarchical-grid-validator-service-extended.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridValidatorServiceExtendedComponent]
})
export class AppComponent {}