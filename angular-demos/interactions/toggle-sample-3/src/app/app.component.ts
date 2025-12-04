import { Component } from "@angular/core";
import { ToggleSample3Component } from "./toggle-sample-3/toggle-sample-3.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ToggleSample3Component]
})
export class AppComponent {}