import { Component } from "@angular/core";
import { QrCodeTailwindStylingComponent } from "./qr-code-tailwind-styling/qr-code-tailwind-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QrCodeTailwindStylingComponent]
})
export class AppComponent {}