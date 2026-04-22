import { Component } from "@angular/core";
import { PivotGridLayoutComponent } from "./pivot-grid/pivot-layout/pivot-layout.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PivotGridLayoutComponent]
})
export class AppComponent {}