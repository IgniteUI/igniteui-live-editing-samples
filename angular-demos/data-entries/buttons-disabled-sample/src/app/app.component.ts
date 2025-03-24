import { Component } from "@angular/core";
import { ButtonsDisabledComponent } from "./buttons-disabled-sample/buttons-disabled-sample";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonsDisabledComponent]
})
export class AppComponent {}