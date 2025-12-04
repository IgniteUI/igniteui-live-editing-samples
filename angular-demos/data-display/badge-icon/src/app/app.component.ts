import { Component } from "@angular/core";
import { BadgeIconComponent } from "./badge-icon/badge-icon.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeIconComponent]
})
export class AppComponent {}