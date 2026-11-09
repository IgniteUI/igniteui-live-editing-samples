import { Component } from "@angular/core";
import { DialogStylingComponent } from "./dialog-styling/dialog-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DialogStylingComponent]
})
export class AppComponent {}