import { Component } from "@angular/core";
import { RightPinningSampleComponent } from "./grid/grid-sample-right-pinning/grid-right-pinning.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RightPinningSampleComponent]
})
export class AppComponent {}