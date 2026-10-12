import { Component } from "@angular/core";
import { CheckboxStatesComponent } from "./checkbox-states/checkbox-states.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CheckboxStatesComponent]
})
export class AppComponent {}