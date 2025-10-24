import { Component } from "@angular/core";
import { PivotGridNoopPersistenceSampleComponent } from "./pivot-grid/pivot-grid-noop-persistence/pivot-grid-noop-persistence-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PivotGridNoopPersistenceSampleComponent]
})
export class AppComponent {}