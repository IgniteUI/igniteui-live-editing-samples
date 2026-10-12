import { Component } from "@angular/core";
import { ButtonOutlinedComponent } from "./button-outlined/button-outlined.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonOutlinedComponent]
})
export class AppComponent {}