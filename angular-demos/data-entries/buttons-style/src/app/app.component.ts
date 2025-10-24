import { Component } from "@angular/core";
import { ButtonsStyleComponent } from "./buttons-style/buttons-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonsStyleComponent]
})
export class AppComponent {}