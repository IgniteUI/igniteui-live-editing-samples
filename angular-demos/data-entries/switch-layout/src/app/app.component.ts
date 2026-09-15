import { Component } from "@angular/core";
import { SwitchLayoutComponent } from "./switch-layout/switch-layout.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SwitchLayoutComponent]
})
export class AppComponent {}