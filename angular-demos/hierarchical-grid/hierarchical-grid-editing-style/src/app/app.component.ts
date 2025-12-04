import { Component } from "@angular/core";
import { HGridEditingStyleComponent } from "./hierarchical-grid/hierarchical-grid-editing-style/hierarchical-grid-editing-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridEditingStyleComponent]
})
export class AppComponent {}