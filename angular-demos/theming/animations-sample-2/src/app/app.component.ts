import { Component } from "@angular/core";
import { AnimationsSample2Component } from "./animations-sample-2/animations-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AnimationsSample2Component]
})
export class AppComponent {}