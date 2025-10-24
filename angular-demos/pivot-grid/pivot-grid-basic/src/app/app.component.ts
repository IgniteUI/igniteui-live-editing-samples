import { Component } from "@angular/core";
import { PivotGridBasicSampleComponent } from "./pivot-grid/pivot-basic-sample/pivot-grid-basic-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PivotGridBasicSampleComponent]
})
export class AppComponent {}