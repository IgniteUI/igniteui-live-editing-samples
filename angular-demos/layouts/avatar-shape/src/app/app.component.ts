import { Component } from "@angular/core";
import { AvatarShapeComponent } from "./avatar-shape/avatar-shape.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AvatarShapeComponent]
})
export class AppComponent {}