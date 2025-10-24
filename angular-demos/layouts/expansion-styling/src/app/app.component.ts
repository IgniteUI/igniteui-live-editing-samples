import { Component } from "@angular/core";
import { ExpansionPanelStylingComponent } from "./expansion-styling/expansion-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ExpansionPanelStylingComponent]
})
export class AppComponent {}