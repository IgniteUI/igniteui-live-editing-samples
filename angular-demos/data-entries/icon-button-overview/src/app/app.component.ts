import { Component } from "@angular/core";
import { IconButtonOverviewComponent } from "./icon-button-overview/icon-button-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [IconButtonOverviewComponent]
})
export class AppComponent {}