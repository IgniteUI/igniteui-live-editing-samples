import { Component } from "@angular/core";
import { TreeGridValidatorServiceExtendedComponent } from "./tree-grid/tree-grid-validator-service-extended/tree-grid-validator-service-extended.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridValidatorServiceExtendedComponent]
})
export class AppComponent {}