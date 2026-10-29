import { Component } from "@angular/core";
import { RadioOrientationComponent } from "./radio-orientation/radio-orientation.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RadioOrientationComponent]
})
export class AppComponent {}