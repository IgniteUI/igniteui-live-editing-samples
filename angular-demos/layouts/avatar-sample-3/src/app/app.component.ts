import { Component } from "@angular/core";
import { AvatarSample3Component } from "./avatar-sample-3/avatar-sample-3.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AvatarSample3Component]
})
export class AppComponent {}