import { Component } from "@angular/core";
import { PinningStylingComponent } from "./grid/grid-sample-pinning-styling/grid-pinning-styling.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PinningStylingComponent]
})
export class AppComponent {}