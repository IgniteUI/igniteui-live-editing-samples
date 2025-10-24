import { Component } from "@angular/core";
import { HGridColumnMovingSampleComponent } from "./hierarchical-grid/hierarchical-grid-column-moving/hierarchical-grid-moving.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridColumnMovingSampleComponent]
})
export class AppComponent {}