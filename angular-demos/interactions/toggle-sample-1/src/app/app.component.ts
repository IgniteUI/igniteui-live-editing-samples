import { Component } from "@angular/core";
import { ToggleSample1Component } from "./toggle-sample-1/toggle-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ToggleSample1Component]
})
export class AppComponent {}