import { Component } from "@angular/core";
import { TileManagerComponent } from "./tile-manager-sample/tile-manager.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TileManagerComponent]
})
export class AppComponent {}