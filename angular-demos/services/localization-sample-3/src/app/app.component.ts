import { Component } from "@angular/core";
import { LocalizationSample3Component } from "./services/localization-samples-old/localization-sample-3/localization-sample-3.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LocalizationSample3Component]
})
export class AppComponent {}