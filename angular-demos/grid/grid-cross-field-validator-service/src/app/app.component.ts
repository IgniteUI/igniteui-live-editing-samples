import { Component } from "@angular/core";
import { GridValidatorServiceCrossFieldComponent } from "./grid/grid-validator-service-cross-field/grid-validator-service-cross-field.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridValidatorServiceCrossFieldComponent]
})
export class AppComponent {}