import { Component } from "@angular/core";
import { GridMovingSampleComponent } from "./grid/grid-moving-sample/grid-moving-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMovingSampleComponent]
})
export class AppComponent {}