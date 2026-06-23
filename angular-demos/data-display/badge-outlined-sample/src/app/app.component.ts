import { Component } from "@angular/core";
import { BadgeOutlinedComponent } from "./badge-outlined/badge-outlined.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeOutlinedComponent]
})
export class AppComponent {}