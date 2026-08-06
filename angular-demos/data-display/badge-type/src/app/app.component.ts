import { Component } from "@angular/core";
import { BadgeTypeComponent } from "./badge-type/badge-type.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeTypeComponent]
})
export class AppComponent {}