import { Component } from "@angular/core";
import { HGridSaveStateComponent } from "./hierarchical-grid/hierarchical-grid-save-state/hGrid-state.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridSaveStateComponent, RouterOutlet]
})
export class AppComponent {}