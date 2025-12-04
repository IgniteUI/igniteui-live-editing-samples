import { Component } from "@angular/core";
import { TreeGridEditingStyleComponent } from "./tree-grid-editing-style/tree-grid-editing-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridEditingStyleComponent]
})
export class AppComponent {}