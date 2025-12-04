import { Component } from "@angular/core";
import { PivotFeaturesComponent } from "./pivot-grid/pivot-features/pivot-features.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PivotFeaturesComponent]
})
export class AppComponent {}