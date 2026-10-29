import { Component } from "@angular/core";
import { RadioOverviewComponent } from "./radio-overview/radio-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RadioOverviewComponent]
})
export class AppComponent {}