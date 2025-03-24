import { Component } from "@angular/core";
import { ToggleSample4Component } from "./toggle-sample-4/toggle-sample-4.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ToggleSample4Component]
})
export class AppComponent {}