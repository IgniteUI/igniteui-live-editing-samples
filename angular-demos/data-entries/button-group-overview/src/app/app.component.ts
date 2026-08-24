import { Component } from "@angular/core";
import { ButtonGroupOverviewComponent } from "./button-group-overview/button-group-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupOverviewComponent]
})
export class AppComponent {}