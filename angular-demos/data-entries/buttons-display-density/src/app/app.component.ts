import { Component } from "@angular/core";
import { ButtonsDisplayDensityComponent } from "./buttons-display-density/buttons-display-density.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonsDisplayDensityComponent]
})
export class AppComponent {}