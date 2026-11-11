import { Component } from "@angular/core";
import { TabsHeaderPositionComponent } from "./tabs-header-position/tabs-header-position.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsHeaderPositionComponent]
})
export class AppComponent {}