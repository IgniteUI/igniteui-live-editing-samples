import { Component } from "@angular/core";
import { ComboOverviewComponent } from "./combo-overview/combo-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboOverviewComponent]
})
export class AppComponent {}