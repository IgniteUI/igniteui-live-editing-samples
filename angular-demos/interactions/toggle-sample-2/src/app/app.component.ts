import { Component } from "@angular/core";
import { ToggleSample2Component } from "./toggle-sample-2/toggle-sample-2.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ToggleSample2Component]
})
export class AppComponent {}