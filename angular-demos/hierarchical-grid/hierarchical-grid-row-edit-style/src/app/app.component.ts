import { Component } from "@angular/core";
import { HGridRowEditStyleComponent } from "./hierarchical-grid/hierarchical-grid-row-edit-style/hierarchical-grid-row-edit-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridRowEditStyleComponent]
})
export class AppComponent {}