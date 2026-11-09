import { Component } from "@angular/core";
import { TabsStatesComponent } from "./tabs-states/tabs-states.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsStatesComponent]
})
export class AppComponent {}