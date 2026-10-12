import { Component } from "@angular/core";
import { ButtonStatesComponent } from "./button-states/button-states.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonStatesComponent]
})
export class AppComponent {}