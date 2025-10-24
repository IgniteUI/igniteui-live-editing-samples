import { Component } from "@angular/core";
import { HierarchicalGridValidatorServiceComponent } from "./hierarchical-grid/hierarchical-grid-validator-service/hierarchical-grid-validator-service.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HierarchicalGridValidatorServiceComponent]
})
export class AppComponent {}