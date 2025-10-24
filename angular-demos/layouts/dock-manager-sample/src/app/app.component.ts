import { Component } from "@angular/core";
import { DockManagerComponent } from "./dock-manager-sample/dock-manager.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DockManagerComponent]
})
export class AppComponent {}