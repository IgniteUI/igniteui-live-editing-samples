import { Component } from "@angular/core";
import { ButtonGroupCustomToggleComponent } from "./button-group-custom-toggle/button-group-custom-toggle.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupCustomToggleComponent]
})
export class AppComponent {}