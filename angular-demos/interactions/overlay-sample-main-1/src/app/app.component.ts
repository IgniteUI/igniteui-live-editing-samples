import { Component } from "@angular/core";
import { OverlaySampleMain1Component } from "./overlay-main-1/overlay-main-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [OverlaySampleMain1Component]
})
export class AppComponent {}