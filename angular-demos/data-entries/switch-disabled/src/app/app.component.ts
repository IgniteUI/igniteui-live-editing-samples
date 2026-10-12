import { Component } from "@angular/core";
import { SwitchDisabledComponent } from "./switch-disabled/switch-disabled.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SwitchDisabledComponent]
})
export class AppComponent {}