import { Component } from "@angular/core";
import { GridValidatorServiceComponent } from "./grid/grid-validator-service/grid-validator-service.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridValidatorServiceComponent]
})
export class AppComponent {}