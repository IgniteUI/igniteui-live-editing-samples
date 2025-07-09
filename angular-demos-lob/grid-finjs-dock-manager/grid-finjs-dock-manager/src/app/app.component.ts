import { Component } from "@angular/core";
import { GridFinJSDockManagerComponent } from "./grid-finjs-dock-manager/grid-finjs-dock-manager.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridFinJSDockManagerComponent]
})
export class AppComponent {}