import { Component } from "@angular/core";
import { SwitchSample2Component } from "./switch-sample-2/switch-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SwitchSample2Component]
})
export class AppComponent {}