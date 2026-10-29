import { Component } from "@angular/core";
import { RadioOnOffStateComponent } from "./radio-on-off-state/radio-on-off-state.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RadioOnOffStateComponent]
})
export class AppComponent {}