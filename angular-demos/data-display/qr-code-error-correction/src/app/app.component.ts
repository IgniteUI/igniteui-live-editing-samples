import { Component } from "@angular/core";
import { QrCodeErrorCorrectionComponent } from "./qr-code-error-correction/qr-code-error-correction.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QrCodeErrorCorrectionComponent]
})
export class AppComponent {}