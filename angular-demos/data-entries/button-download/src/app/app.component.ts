import { Component } from "@angular/core";
import { ButtonDownloadComponent } from "./button-download/button-download.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonDownloadComponent]
})
export class AppComponent {}