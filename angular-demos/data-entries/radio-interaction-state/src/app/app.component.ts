import { Component } from "@angular/core";
import { RadioInteractionStateComponent } from "./radio-interaction-state/radio-interaction-state.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RadioInteractionStateComponent]
})
export class AppComponent {}