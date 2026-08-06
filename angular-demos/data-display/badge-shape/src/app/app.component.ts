import { Component } from "@angular/core";
import { BadgeShapeComponent } from "./badge-shape/badge-shape.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeShapeComponent]
})
export class AppComponent {}