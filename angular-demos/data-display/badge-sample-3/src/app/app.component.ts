import { Component } from "@angular/core";
import { BadgeSample3Component } from "./badge-sample-3/badge-sample-3.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeSample3Component]
})
export class AppComponent {}