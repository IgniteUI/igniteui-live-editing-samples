import { Component } from "@angular/core";
import { TGridSaveStateComponent } from "./tree-grid-save-state/tGrid-state.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TGridSaveStateComponent]
})
export class AppComponent {}