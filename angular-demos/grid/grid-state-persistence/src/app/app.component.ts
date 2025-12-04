import { Component } from "@angular/core";
import { GridStatePersistenceSampleComponent } from "./grid/grid-state-persistence-sample/grid-state-persistance-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridStatePersistenceSampleComponent]
})
export class AppComponent {}