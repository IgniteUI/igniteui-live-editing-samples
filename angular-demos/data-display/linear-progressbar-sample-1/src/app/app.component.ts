import { Component } from "@angular/core";
import { LinearProgressbarSample1Component } from "./linear-progressbar-sample-1/linear-progressbar-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LinearProgressbarSample1Component]
})
export class AppComponent {}