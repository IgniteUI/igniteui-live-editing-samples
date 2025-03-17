import { Component } from "@angular/core";
import { GridValidatorServiceExtendedComponent } from "./grid/grid-validator-service-extended/grid-validator-service-extended.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridValidatorServiceExtendedComponent]
})
export class AppComponent {}