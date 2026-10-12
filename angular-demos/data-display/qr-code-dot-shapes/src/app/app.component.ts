import { Component } from "@angular/core";
import { QrCodeDotShapesComponent } from "./qr-code-dot-shapes/qr-code-dot-shapes.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QrCodeDotShapesComponent]
})
export class AppComponent {}