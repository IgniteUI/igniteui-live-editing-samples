import { Component } from "@angular/core";
import { ButtonGroupStatesComponent } from "./button-group-states/button-group-states.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupStatesComponent]
})
export class AppComponent {}