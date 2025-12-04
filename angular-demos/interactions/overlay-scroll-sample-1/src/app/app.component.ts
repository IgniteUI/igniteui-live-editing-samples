import { Component } from "@angular/core";
import { OverlayScrollSample1Component } from "./overlay-scroll-1/overlay-scroll-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [OverlayScrollSample1Component]
})
export class AppComponent {}