import { Component } from "@angular/core";
import { InputTextSelectionComponent } from "./input-group/input-text-selection/input-text-selection.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [InputTextSelectionComponent]
})
export class AppComponent {}