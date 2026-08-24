import { Component } from "@angular/core";
import { ButtonGroupLayoutComponent } from "./button-group-layout/button-group-layout.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupLayoutComponent]
})
export class AppComponent {}