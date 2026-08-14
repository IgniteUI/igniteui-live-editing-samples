import { Component } from "@angular/core";
import { AvatarVariantsComponent } from "./avatar-variants/avatar-variants.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AvatarVariantsComponent]
})
export class AppComponent {}