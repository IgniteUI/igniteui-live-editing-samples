import { Component } from "@angular/core";
import { TreeGridValidationStyleComponent } from "./tree-grid-validation-style/tree-grid-validation-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridValidationStyleComponent]
})
export class AppComponent {}