import { Component } from "@angular/core";
import { GridEditingSampleComponent } from "./grid/grid-editing-sample/grid-editing-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridEditingSampleComponent]
})
export class AppComponent {}