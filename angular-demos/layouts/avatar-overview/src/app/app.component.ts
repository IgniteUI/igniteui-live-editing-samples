import { Component } from "@angular/core";
import { AvatarOverviewComponent } from "./avatar-overview/avatar-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AvatarOverviewComponent]
})
export class AppComponent {}