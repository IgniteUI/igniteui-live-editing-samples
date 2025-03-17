import { Component } from "@angular/core";
import { GridSaveStateComponent } from "./grid/grid-save-state/grid-state.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridSaveStateComponent]
})
export class AppComponent {}