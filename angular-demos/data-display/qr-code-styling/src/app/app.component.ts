import { Component } from "@angular/core";
import { QrCodeStylingComponent } from "./qr-code-styling/qr-code-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QrCodeStylingComponent]
})
export class AppComponent {}