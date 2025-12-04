import { Component } from "@angular/core";
import { GridSaveStateComponent } from "./grid/grid-save-state/grid-state.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridSaveStateComponent, RouterOutlet]
})
export class AppComponent {}