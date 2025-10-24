import { Component } from "@angular/core";
import { ComboOverlayComponent } from "./lists/combo/combo-overlay/combo-overlay.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboOverlayComponent]
})
export class AppComponent {}