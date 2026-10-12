import { Component } from "@angular/core";
import { QrCodeLogoComponent } from "./qr-code-logo/qr-code-logo.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QrCodeLogoComponent]
})
export class AppComponent {}