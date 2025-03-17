import { Component } from "@angular/core";
import { ExpansionPanelSample1Component } from "./expansion-sample-1/expansion-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ExpansionPanelSample1Component]
})
export class AppComponent {}