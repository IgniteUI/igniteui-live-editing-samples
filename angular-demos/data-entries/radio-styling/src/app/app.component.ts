import { Component } from "@angular/core";
import { RadioStylingComponent } from "./radio-styling/radio-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RadioStylingComponent]
})
export class AppComponent {}