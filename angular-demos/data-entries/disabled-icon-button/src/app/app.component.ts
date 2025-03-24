import { Component } from "@angular/core";
import { DisabledIconButtonComponent } from "./disabled-icon-button/disabled-icon-button.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DisabledIconButtonComponent]
})
export class AppComponent {}