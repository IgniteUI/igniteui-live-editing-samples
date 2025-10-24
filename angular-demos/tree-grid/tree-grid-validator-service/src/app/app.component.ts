import { Component } from "@angular/core";
import { TreeGridValidatorServiceComponent } from "./tree-grid/tree-grid-validator-service/tree-grid-validator-service.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridValidatorServiceComponent]
})
export class AppComponent {}