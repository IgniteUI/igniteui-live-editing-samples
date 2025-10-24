import { Component } from "@angular/core";
import { HGridDisplayDensitySampleComponent } from "./hierarchical-grid/hierarchical-grid-display-density/hierarchical-grid-density.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridDisplayDensitySampleComponent]
})
export class AppComponent {}