import { Component } from "@angular/core";
import { RippleSample4Component } from "./ripple-sample-4/ripple-sample-4.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RippleSample4Component]
})
export class AppComponent {}