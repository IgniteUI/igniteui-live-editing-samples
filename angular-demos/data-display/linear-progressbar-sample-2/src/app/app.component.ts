import { Component } from "@angular/core";
import { LinearProgressbarSample2Component } from "./linear-progressbar-sample-2/linear-progressbar-sample-2.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LinearProgressbarSample2Component]
})
export class AppComponent {}