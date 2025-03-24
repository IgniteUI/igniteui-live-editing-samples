import { Component } from "@angular/core";
import { PivotGridNoopSampleComponent } from "./pivot-grid/pivot-grid-noop/pivot-grid-noop-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PivotGridNoopSampleComponent]
})
export class AppComponent {}