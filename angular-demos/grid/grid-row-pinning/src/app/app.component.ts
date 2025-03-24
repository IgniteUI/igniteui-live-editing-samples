import { Component } from "@angular/core";
import { GridRowPinningSampleComponent } from "./grid/grid-row-pinning/grid-row-pinning.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridRowPinningSampleComponent]
})
export class AppComponent {}