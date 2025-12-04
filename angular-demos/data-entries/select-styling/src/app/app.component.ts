import { Component } from "@angular/core";
import { SelectStylingComponent } from "./select-styling/select-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SelectStylingComponent]
})
export class AppComponent {}