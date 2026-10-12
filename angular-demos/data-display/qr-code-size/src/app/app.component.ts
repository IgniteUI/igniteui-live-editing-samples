import { Component } from "@angular/core";
import { QrCodeSizeComponent } from "./qr-code-size/qr-code-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QrCodeSizeComponent]
})
export class AppComponent {}