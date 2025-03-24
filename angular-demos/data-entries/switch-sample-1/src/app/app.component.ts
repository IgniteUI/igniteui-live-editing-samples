import { Component } from "@angular/core";
import { SwitchSample1Component } from "./switch-sample-1/switch-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SwitchSample1Component]
})
export class AppComponent {}