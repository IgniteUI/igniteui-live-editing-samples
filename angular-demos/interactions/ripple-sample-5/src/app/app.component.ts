import { Component } from "@angular/core";
import { RippleSample5Component } from "./ripple-sample-5/ripple-sample-5.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RippleSample5Component]
})
export class AppComponent {}