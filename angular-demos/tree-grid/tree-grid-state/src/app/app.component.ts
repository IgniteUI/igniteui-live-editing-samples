import { Component } from "@angular/core";
import { TGridSaveStateComponent } from "./tree-grid-save-state/tGrid-state.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TGridSaveStateComponent, RouterOutlet]
})
export class AppComponent {}