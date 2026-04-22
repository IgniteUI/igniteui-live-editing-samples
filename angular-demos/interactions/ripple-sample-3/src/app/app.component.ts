import { Component } from "@angular/core";
import { RippleSample3Component } from "./ripple-sample-3/ripple-sample-3.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RippleSample3Component]
})
export class AppComponent {}