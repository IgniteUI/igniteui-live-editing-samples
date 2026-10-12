import { Component } from "@angular/core";
import { ButtonFlatComponent } from "./button-flat/button-flat.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonFlatComponent]
})
export class AppComponent {}