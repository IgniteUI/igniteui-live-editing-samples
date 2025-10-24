import { Component } from "@angular/core";
import { PivotGridStatePersistenceSampleComponent } from "./pivot-grid/pivot-state-persistence/pivot-grid-state-persistence-sample.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PivotGridStatePersistenceSampleComponent, RouterOutlet]
})
export class AppComponent {}