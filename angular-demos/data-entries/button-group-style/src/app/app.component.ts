import { Component } from "@angular/core";
import { ButtonGroupStyleComponent } from "./button-group-style/button-group-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupStyleComponent]
})
export class AppComponent {}