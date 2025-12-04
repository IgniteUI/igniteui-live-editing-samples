import { Component } from "@angular/core";
import { TreeGridStyleComponent } from "./tree-grid-style/tree-grid-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridStyleComponent]
})
export class AppComponent {}