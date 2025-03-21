import { Component } from "@angular/core";
import { FinJSDemoComponent } from "./grid-finjs/main.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [FinJSDemoComponent]
})
export class AppComponent {}