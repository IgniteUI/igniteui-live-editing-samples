import { Component } from "@angular/core";
import { BadgeStylingSampleComponent } from "./badge-styling-sample/badge-styling-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeStylingSampleComponent]
})
export class AppComponent {}