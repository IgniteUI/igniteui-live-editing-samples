import { Component } from "@angular/core";
import { SimpleComboStatesComponent } from "./simple-combo-states/simple-combo-states.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboStatesComponent]
})
export class AppComponent {}