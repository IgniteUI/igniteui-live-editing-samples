import { Component } from "@angular/core";
import { ButtonSizeComponent } from "./button-size/button-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonSizeComponent]
})
export class AppComponent {}