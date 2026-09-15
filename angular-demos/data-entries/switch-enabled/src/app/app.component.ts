import { Component } from "@angular/core";
import { SwitchEnabledComponent } from "./switch-enabled/switch-enabled.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SwitchEnabledComponent]
})
export class AppComponent {}