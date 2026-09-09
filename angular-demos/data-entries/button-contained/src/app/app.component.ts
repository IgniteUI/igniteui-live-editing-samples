import { Component } from "@angular/core";
import { ButtonContainedComponent } from "./button-contained/button-contained.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonContainedComponent]
})
export class AppComponent {}