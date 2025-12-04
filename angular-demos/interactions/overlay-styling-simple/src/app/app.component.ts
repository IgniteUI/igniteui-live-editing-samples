import { Component } from "@angular/core";
import { OverlayStylingComponent } from "./overlay-styling/overlay-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [OverlayStylingComponent]
})
export class AppComponent {}