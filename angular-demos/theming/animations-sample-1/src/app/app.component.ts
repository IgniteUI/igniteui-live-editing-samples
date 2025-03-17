import { Component } from "@angular/core";
import { AnimationsSampleComponent } from "./animations-sample-1/animations-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AnimationsSampleComponent]
})
export class AppComponent {}