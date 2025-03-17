import { Component } from "@angular/core";
import { PinningToolbarSampleComponent } from "./grid/grid-sample-pinning/grid-toolbar-pinning.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PinningToolbarSampleComponent]
})
export class AppComponent {}