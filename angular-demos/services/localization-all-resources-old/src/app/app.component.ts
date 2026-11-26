import { Component } from "@angular/core";
import { LocalizationAllResourcesOldComponent } from "./services/localization-samples-old/localization-all-resources/localization-all-resources.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LocalizationAllResourcesOldComponent]
})
export class AppComponent {}