import { Component } from "@angular/core";
import { IconSizeComponent } from "./icon-size/icon-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [IconSizeComponent]
})
export class AppComponent {}