import { Component } from "@angular/core";
import { TabsOverviewComponent } from "./tabs-overview/tabs-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsOverviewComponent]
})
export class AppComponent {}