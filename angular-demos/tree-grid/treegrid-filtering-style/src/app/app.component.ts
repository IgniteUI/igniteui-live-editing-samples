import { Component } from "@angular/core";
import { TreeGridFilteringStyleComponent } from "./tree-grid-filtering-style/tree-grid-filtering-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridFilteringStyleComponent]
})
export class AppComponent {}