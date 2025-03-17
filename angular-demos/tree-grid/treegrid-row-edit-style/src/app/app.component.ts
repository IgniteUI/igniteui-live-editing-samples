import { Component } from "@angular/core";
import { TreeGridRowEditStyleComponent } from "./tree-grid-row-edit-style/tree-grid-row-edit-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridRowEditStyleComponent]
})
export class AppComponent {}