import { Component } from "@angular/core";
import { ToggleComponent } from "./toggle/toggle.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ToggleComponent]
})
export class AppComponent {}