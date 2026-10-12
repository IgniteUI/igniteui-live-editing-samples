import { Component } from "@angular/core";
import { ButtonFabComponent } from "./button-fab/button-fab.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonFabComponent]
})
export class AppComponent {}