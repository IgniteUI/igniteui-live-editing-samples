import { Component } from "@angular/core";
import { BadgeDotComponent } from "./badge-dot/badge-dot.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeDotComponent]
})
export class AppComponent {}