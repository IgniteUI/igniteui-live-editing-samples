import { Component } from "@angular/core";
import { ComboStatesComponent } from "./combo-states/combo-states.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboStatesComponent]
})
export class AppComponent {}