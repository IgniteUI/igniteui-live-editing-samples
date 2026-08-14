import { Component } from "@angular/core";
import { AvatarSizeComponent } from "./avatar-size/avatar-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AvatarSizeComponent]
})
export class AppComponent {}