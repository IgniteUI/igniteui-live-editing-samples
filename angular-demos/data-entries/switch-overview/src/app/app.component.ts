import { Component } from "@angular/core";
import { SwitchOverviewComponent } from "./switch-overview/switch-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SwitchOverviewComponent]
})
export class AppComponent {}