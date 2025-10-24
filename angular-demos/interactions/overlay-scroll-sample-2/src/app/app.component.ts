import { Component } from "@angular/core";
import { OverlayScrollSample2Component } from "./overlay-scroll-2/overlay-scroll-sample-2.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [OverlayScrollSample2Component]
})
export class AppComponent {}