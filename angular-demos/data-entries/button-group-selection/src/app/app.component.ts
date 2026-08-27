import { Component } from "@angular/core";
import { ButtonGroupSelectionComponent } from "./button-group-selection/button-group-selection.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupSelectionComponent]
})
export class AppComponent {}