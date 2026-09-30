import { Component } from "@angular/core";
import { QrCodeOverviewComponent } from "./qr-code-overview/qr-code-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QrCodeOverviewComponent]
})
export class AppComponent {}