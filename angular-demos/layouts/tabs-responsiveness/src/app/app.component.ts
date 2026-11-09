import { Component } from "@angular/core";
import { TabsResponsivenessComponent } from "./tabs-responsiveness/tabs-responsiveness.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsResponsivenessComponent]
})
export class AppComponent {}