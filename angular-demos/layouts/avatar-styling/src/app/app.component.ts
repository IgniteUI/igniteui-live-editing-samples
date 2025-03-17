import { Component } from "@angular/core";
import { AvatarStylingSampleComponent } from "./avatar-styling/avatar-styling.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AvatarStylingSampleComponent]
})
export class AppComponent {}