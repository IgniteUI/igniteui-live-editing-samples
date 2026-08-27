import { Component } from "@angular/core";
import { BadgeSizeComponent } from "./badge-size/badge-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeSizeComponent]
})
export class AppComponent {}