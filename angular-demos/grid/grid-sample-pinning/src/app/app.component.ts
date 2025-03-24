import { Component } from "@angular/core";
import { PinningSampleComponent } from "./grid/grid-sample-pinning/grid-pinning.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PinningSampleComponent]
})
export class AppComponent {}