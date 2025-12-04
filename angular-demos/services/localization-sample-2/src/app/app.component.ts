import { Component } from "@angular/core";
import { LocalizationSample2Component } from "./services/localization-samples/localization-sample-2/localization-sample-2.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LocalizationSample2Component]
})
export class AppComponent {}