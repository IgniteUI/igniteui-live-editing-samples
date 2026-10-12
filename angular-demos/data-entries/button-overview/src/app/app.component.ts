import { Component } from "@angular/core";
import { ButtonOverviewComponent } from "./button-overview/button-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonOverviewComponent]
})
export class AppComponent {}