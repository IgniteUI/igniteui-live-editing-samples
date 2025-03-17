import { Component } from "@angular/core";
import { TreeStylingComponent } from "./lists/tree/tree-styling/tree-styling.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeStylingComponent]
})
export class AppComponent {}