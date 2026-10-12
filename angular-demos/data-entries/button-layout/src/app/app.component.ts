import { Component } from "@angular/core";
import { ButtonLayoutComponent } from "./button-layout/button-layout.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonLayoutComponent]
})
export class AppComponent {}