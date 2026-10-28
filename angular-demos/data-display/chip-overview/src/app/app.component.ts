import { Component } from "@angular/core";
import { ChipOverviewComponent } from "./chip/chip-overview/chip-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipOverviewComponent]
})
export class AppComponent {}