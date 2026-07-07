import { Component } from "@angular/core";
import { PivotStylingComponent } from "./pivot-grid/pivot-styling/pivot-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PivotStylingComponent]
})
export class AppComponent {}