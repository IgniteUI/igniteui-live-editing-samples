import { Component } from "@angular/core";
import { LinearProgressbarStylingComponent } from "./linear-progressbar-styling-sample/linear-progressbar-styling-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LinearProgressbarStylingComponent]
})
export class AppComponent {}