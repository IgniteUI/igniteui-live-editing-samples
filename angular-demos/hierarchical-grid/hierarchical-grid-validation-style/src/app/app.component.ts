import { Component } from "@angular/core";
import { HGridValidationStyleComponent } from "./hierarchical-grid/hierarchical-grid-validation-style/hierarchical-grid-validation-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridValidationStyleComponent]
})
export class AppComponent {}