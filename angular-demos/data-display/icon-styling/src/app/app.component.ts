import { Component } from "@angular/core";
import { IconStylingComponent } from "./icon-styling/icon-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [IconStylingComponent]
})
export class AppComponent {}