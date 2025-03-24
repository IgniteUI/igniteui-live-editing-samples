import { Component } from "@angular/core";
import { LocalizationSample1Component } from "./services/localization-samples/localization-sample-1/localization-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LocalizationSample1Component]
})
export class AppComponent {}