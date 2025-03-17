import { Component } from "@angular/core";
import { HGridSaveStateComponent } from "./hierarchical-grid/hierarchical-grid-save-state/hGrid-state.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridSaveStateComponent]
})
export class AppComponent {}