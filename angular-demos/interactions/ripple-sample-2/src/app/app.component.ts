import { Component } from "@angular/core";
import { RippleSample2Component } from "./ripple-sample-2/ripple-sample-2.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RippleSample2Component]
})
export class AppComponent {}