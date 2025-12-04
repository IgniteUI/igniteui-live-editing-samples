import { Component } from "@angular/core";
import { LocalizationAllResourcesComponent } from "./services/localization-samples/localization-all-resources/localization-all-resources.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LocalizationAllResourcesComponent]
})
export class AppComponent {}