import { Component } from "@angular/core";
import { SwitchSelectedComponent } from "./switch-selected/switch-selected.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SwitchSelectedComponent]
})
export class AppComponent {}