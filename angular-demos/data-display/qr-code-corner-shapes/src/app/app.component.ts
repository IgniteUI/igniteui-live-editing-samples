import { Component } from "@angular/core";
import { QrCodeCornerShapesComponent } from "./qr-code-corner-shapes/qr-code-corner-shapes.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QrCodeCornerShapesComponent]
})
export class AppComponent {}